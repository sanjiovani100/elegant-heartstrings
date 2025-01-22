import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageContent, PageSection, ContentTranslation } from "@/types/content";
import { Json } from "@/integrations/supabase/types";

export const usePageContent = (slug: string) => {
  return useQuery({
    queryKey: ['page-content', slug],
    queryFn: async () => {
      // First, get the page
      const { data: page, error: pageError } = await supabase
        .from('pages')
        .select('*')
        .eq('slug', slug)
        .single();

      if (pageError) throw pageError;
      if (!page) throw new Error('Page not found');

      // Then get all sections for this page
      const { data: sections, error: sectionsError } = await supabase
        .from('page_sections')
        .select(`
          *,
          content_translations (*)
        `)
        .eq('page_id', page.id)
        .order('order');

      if (sectionsError) throw sectionsError;

      // Transform the data to match our types
      const transformedSections: PageSection[] = sections.map(section => ({
        id: section.id,
        pageId: section.page_id,
        sectionKey: section.section_key,
        order: section.order,
        translations: section.content_translations.map((trans: any) => ({
          id: trans.id,
          sectionId: trans.section_id,
          key: trans.key,
          en: trans.en,
          es: trans.es,
          contentType: trans.content_type,
        })),
      }));

      const pageContent: PageContent = {
        id: page.id,
        slug: page.slug,
        sections: transformedSections,
        isPublished: page.is_published,
        metadata: page.metadata as Record<string, any> || {},
      };

      return pageContent;
    },
  });
};
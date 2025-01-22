import { supabase } from "@/integrations/supabase/client";

export const seedInitialContent = async () => {
  // Insert home page
  const { data: page, error: pageError } = await supabase
    .from('pages')
    .insert({
      slug: 'home',
      is_published: true,
    })
    .select()
    .single();

  if (pageError) throw pageError;

  // Insert hero section
  const { data: heroSection, error: heroError } = await supabase
    .from('page_sections')
    .insert({
      page_id: page.id,
      section_key: 'hero',
      order: 1,
    })
    .select()
    .single();

  if (heroError) throw heroError;

  // Insert translations for hero section
  await supabase
    .from('content_translations')
    .insert([
      {
        section_id: heroSection.id,
        key: 'title',
        en: 'Welcome to Fashionistas',
        es: 'Bienvenido a Fashionistas',
        content_type: 'text',
      },
      {
        section_id: heroSection.id,
        key: 'subtitle',
        en: 'Discover the latest in fashion',
        es: 'Descubre lo último en moda',
        content_type: 'text',
      },
    ]);

  return { success: true };
};
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ContentTranslation } from "@/types/content";
import { useToast } from "@/hooks/use-toast";

export const useTranslations = (sectionKey: string) => {
  const { toast } = useToast();

  return useQuery({
    queryKey: ['translations', sectionKey],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('content_translations')
        .select('*')
        .eq('section_key', sectionKey);

      if (error) {
        toast({
          title: "Error loading translations",
          description: error.message,
          variant: "destructive",
        });
        throw error;
      }

      return data?.map(item => ({
        id: item.id,
        sectionId: item.section_id,
        key: item.key,
        en: item.en,
        es: item.es,
        contentType: item.content_type as 'text' | 'html' | 'markdown',
        status: item.status,
        version: item.version
      })) as ContentTranslation[];
    },
    staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
    gcTime: 1000 * 60 * 30, // Keep in cache for 30 minutes
    retry: 2,
    refetchOnWindowFocus: false,
  });
};
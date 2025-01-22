export interface PageContent {
  id: string;
  slug: string;
  sections: PageSection[];
  isPublished: boolean;
  metadata?: Record<string, any>;
}

export interface PageSection {
  id: string;
  pageId: string;
  sectionKey: string;
  order: number;
  translations: ContentTranslation[];
}

export interface ContentTranslation {
  id: string;
  sectionId: string;
  key: string;
  en: string | null;
  es: string | null;
  contentType: 'text' | 'html' | 'markdown';
}

export type Language = 'en' | 'es';
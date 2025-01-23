import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/types/content';
import { useToast } from '@/hooks/use-toast';

interface LanguageContextType {
  currentLanguage: Language;
  isChangingLanguage: boolean;
  setLanguage: (lang: Language) => void;
  t: (key: string, defaultValue?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);
  const { toast } = useToast();

  const setLanguage = async (lang: Language) => {
    try {
      setIsChangingLanguage(true);
      setCurrentLanguage(lang);
      localStorage.setItem('language', lang);
      
      toast({
        title: "Language Changed",
        description: `Successfully switched to ${lang === 'en' ? 'English' : 'Español'}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to change language. Please try again.",
        variant: "destructive",
      });
    } finally {
      // Add a small delay to make the transition smoother
      setTimeout(() => {
        setIsChangingLanguage(false);
      }, 300);
    }
  };

  const t = (key: string, defaultValue?: string): string => {
    return defaultValue || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, isChangingLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [isMounted, setIsMounted] = useState(false);
  
  const isRTL = language === 'ar';

    const t = (key: string, defaultValue?: string) => {
      // If the key exists in the current language, return it
      if (translations[language] && key in translations[language]) {
        return translations[language][key];
      }
      
      // Fallback to English translation if available
      if (translations['en'] && key in translations['en']) {
        return translations['en'][key];
      }

      // If no translation found, return the defaultValue or the key itself
      // This allows using the English text as the key for "auto" behavior
      return defaultValue || key;
    };

  useEffect(() => {
    setIsMounted(true);
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && Object.keys(translations).includes(savedLang)) {
      setLanguage(savedLang);
      document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = savedLang;
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-arabic' : ''}>
        {isMounted ? children : <div style={{ visibility: 'hidden' }}>{children}</div>}
      </div>
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

/**
 * Trans Component
 * This is the recommended way to add text to the page.
 * It ensures that the text is wrapped in the translation system.
 * Usage: <Trans k="Your text here">Your text here</Trans>
 */
export const Trans: React.FC<{ k: string; children?: React.ReactNode }> = ({ k, children }) => {
  const { t } = useLanguage();
  
  // If children is a string, use it as the default value
  const defaultValue = typeof children === 'string' ? children : undefined;
  const translated = t(k, defaultValue);
  
  return <>{translated}</>;
};

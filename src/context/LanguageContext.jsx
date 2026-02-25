import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translate } from '../i18n';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('fov_lang') || 'en');

  useEffect(() => {
    localStorage.setItem('fov_lang', language);
    document.documentElement.lang = language === 'fr' ? 'fr' : 'en';
  }, [language]);

  const t = useMemo(() => (text) => translate(text, language), [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }
  return context;
}

// src/context/LanguageContext.tsx
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES_KEYS } from '../Constants/SharedConstants';

interface LanguageContextType {
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage =
      currentLanguage === LANGUAGES_KEYS.ENGLISH
        ? LANGUAGES_KEYS.ARABIC
        : LANGUAGES_KEYS.ENGLISH;
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const languageDirection =
      i18n.language === LANGUAGES_KEYS.ARABIC ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', languageDirection);
  }, [i18n.language]);

  return (
    <LanguageContext.Provider value={{ toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

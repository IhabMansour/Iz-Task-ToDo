import { jsx as _jsx } from "react/jsx-runtime";
// src/context/LanguageContext.tsx
import { createContext, useContext, useEffect, } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES_KEYS } from '../Constants/SharedConstants';
const LanguageContext = createContext(undefined);
export const LanguageProvider = ({ children, }) => {
    const { i18n } = useTranslation();
    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === LANGUAGES_KEYS.ENGLISH
            ? LANGUAGES_KEYS.ARABIC
            : LANGUAGES_KEYS.ENGLISH;
        i18n.changeLanguage(newLanguage);
    };
    useEffect(() => {
        const languageDirection = i18n.language === LANGUAGES_KEYS.ARABIC ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', languageDirection);
    }, [i18n.language]);
    return (_jsx(LanguageContext.Provider, { value: { toggleLanguage }, children: children }));
};
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

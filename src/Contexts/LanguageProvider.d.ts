import React, { ReactNode } from 'react';
interface LanguageContextType {
    toggleLanguage: () => void;
}
interface LanguageProviderProps {
    children: ReactNode;
}
export declare const LanguageProvider: React.FC<LanguageProviderProps>;
export declare const useLanguage: () => LanguageContextType;
export {};

import React, { ReactNode } from 'react';
interface ThemeContextType {
    toggleDarkMode: () => void;
    isDarkMode: boolean;
}
interface ThemeProviderProps {
    children: ReactNode;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare const useTheme: () => ThemeContextType;
export {};

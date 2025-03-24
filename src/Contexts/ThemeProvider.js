import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect, useContext, } from 'react';
import { ConfigProvider } from 'antd';
import { darkTheme, lightTheme } from '../Utils/theme';
const ThemeContext = createContext(undefined);
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme) {
            setIsDarkMode(JSON.parse(savedTheme));
        }
    }, []);
    const toggleDarkMode = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem('darkMode', JSON.stringify(newTheme));
    };
    // Choose the theme dynamically based on `isDarkMode`
    const currentTheme = isDarkMode ? darkTheme : lightTheme;
    return (_jsx(ThemeContext.Provider, { value: { toggleDarkMode, isDarkMode }, children: _jsx(ConfigProvider, { theme: currentTheme, children: children }) }));
};
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

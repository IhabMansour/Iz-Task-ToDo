import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './pages/SignUp';
import Settings from './pages/Settings.tsx';
import HuntGhosts from './Pages/HuntGhosts';
import { AuthProvider, useAuth } from './Contexts/AuthContext';
import { ThemeProvider } from './Contexts/ThemeProvider';
import TodoPage from './Pages/ToDo';
import { LanguageProvider } from './Contexts/LanguageProvider';
import './Utils/i18n';
import { Layout } from 'antd';
import Home from './Pages/Home';
import './App.css';
import HeaderComponent from './Layout/Header';
import FooterComponent from './Layout/Footer';
import { MAIN_LINKS } from './Constants/Links';
import { TaskProvider } from './Contexts/TaskContext';
const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();
    return token ? children : _jsx(Navigate, { to: MAIN_LINKS.SIGN_IN });
};
const LayoutWrapper = ({ children }) => {
    const location = useLocation();
    // Check if the current route is either the SignIn or SignUp page
    const isAuthPage = location.pathname === MAIN_LINKS.SIGN_IN ||
        location.pathname === MAIN_LINKS.SIGN_UP;
    return (_jsxs(Layout, { children: [!isAuthPage && (_jsx(Layout.Header, { style: { background: 'transparent' }, children: _jsx(HeaderComponent, {}) })), _jsx(Layout.Content, { children: children }), !isAuthPage && (_jsx(Layout.Footer, { children: _jsx(FooterComponent, {}) }))] }));
};
const App = () => {
    return (_jsx(AuthProvider, { children: _jsx(ThemeProvider, { children: _jsx(LanguageProvider, { children: _jsx(TaskProvider, { children: _jsx(Router, { children: _jsx(LayoutWrapper, { children: _jsxs(Routes, { children: [_jsx(Route, { path: MAIN_LINKS.HOME, element: _jsx(Home, {}) }), _jsx(Route, { path: MAIN_LINKS.SIGN_IN, element: _jsx(SignIn, {}) }), _jsx(Route, { path: MAIN_LINKS.SIGN_UP, element: _jsx(SignUp, {}) }), _jsx(Route, { path: MAIN_LINKS.TODO, element: _jsx(ProtectedRoute, { children: _jsx(TodoPage, {}) }) }), _jsx(Route, { path: MAIN_LINKS.SETTINGS, element: _jsx(ProtectedRoute, { children: _jsx(Settings, {}) }) }), _jsx(Route, { path: MAIN_LINKS.GHOST_HUNT, element: _jsx(HuntGhosts, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: MAIN_LINKS.SIGN_IN }) })] }) }) }) }) }) }) }));
};
export default App;

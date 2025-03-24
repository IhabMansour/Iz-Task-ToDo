import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Menu, Button, Drawer, Flex, Dropdown } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../Contexts/ThemeProvider';
import { useLanguage } from '../Contexts/LanguageProvider';
import { useTranslation } from 'react-i18next';
import LogoIcon from '../Icons/LogoIcon';
import DarkModeIcon from '../Icons/DarkModeIcon';
import LanguageIcon from '../Icons/LanguageIcon';
import { MenuOutlined } from '@ant-design/icons';
import useIsMobile from '../Hooks/UseIsMobile';
import { MAIN_LINKS } from '../Constants/Links';
import { LANGUAGES_KEYS } from '../Constants/SharedConstants';
import { useAuth } from '../Contexts/AuthContext';
import AvatarImage from '../assets/Avatar.png';
import UserIcon from '../Icons/UserIcon';
import LogOutIcon from '../Icons/LogOutIcon';
const HeaderComponent = ({ specialHeader }) => {
    const { toggleDarkMode, isDarkMode } = useTheme();
    const { toggleLanguage } = useLanguage();
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const { token, logout } = useAuth();
    const isMobile = useIsMobile();
    const navigate = useNavigate();
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const menuItems = [
        {
            key: '1',
            label: _jsx(Link, { to: MAIN_LINKS.HOME, children: t('HOME') }),
        },
        {
            key: '2',
            label: _jsx(Link, { to: MAIN_LINKS.GHOST_HUNT, children: t('GHOST_HUNT') }),
        },
        {
            key: '3',
            label: _jsx(Link, { to: MAIN_LINKS.TODO, children: t('TODO_TASK') }),
        },
    ];
    const mobileMenuItems = [
        {
            key: '1',
            label: _jsx(Link, { to: MAIN_LINKS.HOME, children: t('HOME') }),
        },
        {
            key: '2',
            label: _jsx(Link, { to: MAIN_LINKS.GHOST_HUNT, children: t('GHOST_HUNT') }),
        },
        {
            key: '3',
            label: (_jsx(Button, { color: "default", variant: "link", icon: _jsx(DarkModeIcon, { color: isDarkMode ? '#D90429' : '#2B2D42' }), onClick: toggleDarkMode })),
        },
        {
            key: '4',
            label: (_jsx(Button, { color: "default", variant: "link", icon: _jsx(LanguageIcon, { color: isDarkMode ? '#D90429' : '#474747' }), onClick: toggleLanguage })),
        },
        {
            key: '5',
            label: (_jsx(Button, { type: "primary", children: _jsx(Link, { to: MAIN_LINKS.SIGN_IN, children: t('LOG_IN') }) })),
        },
    ];
    const authItems = [
        {
            label: (_jsx(Button, { color: "default", variant: "link", icon: _jsx(UserIcon, { color: isDarkMode ? '#D90429' : '#2B2D42' }), onClick: () => navigate(MAIN_LINKS.SETTINGS), children: t('HEADER_PROFILE') })),
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: (_jsx(Button, { color: "default", variant: "link", icon: _jsx(LogOutIcon, { color: isDarkMode ? '#D90429' : '#2B2D42' }), onClick: logout, children: t('HEADER_LOGOUT') })),
            key: '1',
        },
    ];
    const showDrawer = () => {
        setDrawerVisible(true);
    };
    const closeDrawer = () => {
        setDrawerVisible(false);
    };
    useEffect(() => {
        const savedImageUrl = localStorage.getItem('uploadedImage');
        if (savedImageUrl) {
            setImageUrl(savedImageUrl);
        }
    }, []);
    return (_jsxs(Flex, { justify: "space-between", align: "center", gap: "middle", style: {
            minHeight: 64,
            width: '100%',
            justifyContent: specialHeader ? 'flex-end' : 'space-between',
            paddingRight: specialHeader && i18n.language == LANGUAGES_KEYS.ENGLISH
                ? 16
                : 'unset',
            paddingLeft: specialHeader && i18n.language == LANGUAGES_KEYS.ARABIC
                ? 16
                : 'unset',
        }, children: [!specialHeader && (_jsx(Link, { to: MAIN_LINKS.HOME, style: { display: 'flex' }, children: _jsx(LogoIcon, {}) })), !specialHeader && !isMobile && (_jsx(Menu, { mode: "horizontal", defaultSelectedKeys: ['1'], items: menuItems, style: {
                    flex: 1,
                    justifyContent: 'center',
                    textAlign: 'center',
                    background: 'transparent',
                    border: 'none',
                } })), _jsx(Flex, { align: "center", gap: "small", children: !isMobile || specialHeader ? (_jsxs(_Fragment, { children: [_jsx(Button, { color: "default", variant: "link", icon: _jsx(DarkModeIcon, { color: isDarkMode ? '#D90429' : '#2B2D42' }), onClick: toggleDarkMode }), _jsx(Button, { color: "default", variant: "link", icon: _jsx(LanguageIcon, { color: isDarkMode ? '#D90429' : '#474747' }), onClick: toggleLanguage }), !specialHeader &&
                            (token ? (_jsx(Dropdown, { menu: { items: authItems }, children: _jsx("a", { onClick: (e) => e.preventDefault(), style: {
                                        display: 'flex',
                                    }, children: _jsx("img", { src: imageUrl ? imageUrl : AvatarImage, alt: "avatar", style: {
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                        } }) }) })) : (_jsx(Button, { type: "primary", children: _jsx(Link, { to: MAIN_LINKS.SIGN_IN, children: t('LOG_IN') }) })))] })) : (_jsx(Button, { type: "link", icon: _jsx(MenuOutlined, {}), onClick: showDrawer, style: {
                        fontSize: '24px',
                        color: isDarkMode ? '#D90429' : '#474747',
                    } })) }), _jsx(Drawer, { title: t('MENU'), placement: i18n.language == LANGUAGES_KEYS.ENGLISH ? 'left' : 'right', closable: true, onClose: closeDrawer, open: drawerVisible, width: 250, children: _jsx(Menu, { items: mobileMenuItems, mode: "vertical", style: {
                        textAlign: 'left',
                        background: 'transparent',
                        border: 'none',
                    } }) })] }));
};
export default HeaderComponent;

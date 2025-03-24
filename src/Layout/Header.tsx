import React, { useEffect, useState } from 'react';
import { Menu, Button, Drawer, Flex, Dropdown, MenuProps } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../Contexts/ThemeProvider';
import { useLanguage } from '../Contexts/LanguageProvider';
import { useTranslation } from 'react-i18next';
import LogoIcon from '../Icons/LogoIcon';
import DarkModeIcon from '../Icons/DarkModeIcon';
import LanguageIcon from '../Icons/LanguageIcon';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import useIsMobile from '../Hooks/UseIsMobile';
import { MAIN_LINKS } from '../Constants/Links';
import { LANGUAGES_KEYS } from '../Constants/SharedConstants';
import { useAuth } from '../Contexts/AuthContext';
import AvatarImage from '../assets/Avatar.png';
import UserIcon from '../Icons/UserIcon';
import LogOutIcon from '../Icons/LogOutIcon';

interface HeaderComponentProps {
  specialHeader?: boolean;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ specialHeader }) => {
  const { toggleDarkMode, isDarkMode } = useTheme();
  const { toggleLanguage } = useLanguage();
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const { token, logout } = useAuth();
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const [drawerVisible, setDrawerVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const menuItems = [
    {
      key: '1',
      label: <Link to={MAIN_LINKS.HOME}>{t('HOME')}</Link>,
    },
    {
      key: '2',
      label: <Link to={MAIN_LINKS.GHOST_HUNT}>{t('GHOST_HUNT')}</Link>,
    },
    {
      key: '3',
      label: <Link to={MAIN_LINKS.TODO}>{t('TODO_TASK')}</Link>,
    },
  ];

  const mobileMenuItems = [
    {
      key: '1',
      label: <Link to={MAIN_LINKS.HOME}>{t('HOME')}</Link>,
    },
    {
      key: '2',
      label: <Link to={MAIN_LINKS.GHOST_HUNT}>{t('GHOST_HUNT')}</Link>,
    },
    {
      key: '3',
      label: (
        <Button
          color="default"
          variant="link"
          icon={<DarkModeIcon color={isDarkMode ? '#D90429' : '#2B2D42'} />}
          onClick={toggleDarkMode}
        />
      ),
    },
    {
      key: '4',
      label: (
        <Button
          color="default"
          variant="link"
          icon={<LanguageIcon color={isDarkMode ? '#D90429' : '#474747'} />}
          onClick={toggleLanguage}
        />
      ),
    },
    {
      key: '5',
      label: (
        <Button type="primary">
          <Link to={MAIN_LINKS.SIGN_IN}>{t('LOG_IN')}</Link>
        </Button>
      ),
    },
  ];

  const authItems: MenuProps['items'] = [
    {
      label: (
        <Button
          color="default"
          variant="link"
          icon={<UserIcon color={isDarkMode ? '#D90429' : '#2B2D42'} />}
          onClick={() => navigate(MAIN_LINKS.SETTINGS)}
        >
          {t('HEADER_PROFILE')}
        </Button>
      ),
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <Button
          color="default"
          variant="link"
          icon={<LogOutIcon color={isDarkMode ? '#D90429' : '#2B2D42'} />}
          onClick={logout}
        >
          {t('HEADER_LOGOUT')}
        </Button>
      ),
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

  return (
    <Flex
      justify="space-between"
      align="center"
      gap="middle"
      {...{
        style: {
          minHeight: 64,
          width: '100%',
          justifyContent: specialHeader ? 'flex-end' : 'space-between',
          paddingRight:
            specialHeader && i18n.language == LANGUAGES_KEYS.ENGLISH
              ? 16
              : 'unset',
          paddingLeft:
            specialHeader && i18n.language == LANGUAGES_KEYS.ARABIC
              ? 16
              : 'unset',
        },
      }}
    >
      {!specialHeader && (
        <Link to={MAIN_LINKS.HOME} {...{ style: { display: 'flex' } }}>
          <LogoIcon />
        </Link>
      )}

      {!specialHeader && !isMobile && (
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={menuItems}
          style={{
            flex: 1,
            justifyContent: 'center',
            textAlign: 'center',
            background: 'transparent',
            border: 'none',
          }}
        />
      )}

      <Flex align="center" gap="small">
        {!isMobile || specialHeader ? (
          <>
            <Button
              color="default"
              variant="link"
              icon={<DarkModeIcon color={isDarkMode ? '#D90429' : '#2B2D42'} />}
              onClick={toggleDarkMode}
            />
            <Button
              color="default"
              variant="link"
              icon={<LanguageIcon color={isDarkMode ? '#D90429' : '#474747'} />}
              onClick={toggleLanguage}
            />
            {!specialHeader &&
              (token ? (
                <Dropdown menu={{ items: authItems }}>
                  <a
                    onClick={(e) => e.preventDefault()}
                    style={{
                      display: 'flex',
                    }}
                  >
                    <img
                      src={imageUrl ? imageUrl : AvatarImage}
                      alt="avatar"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                      }}
                    />
                  </a>
                </Dropdown>
              ) : (
                <Button type="primary">
                  <Link to={MAIN_LINKS.SIGN_IN}>{t('LOG_IN')}</Link>
                </Button>
              ))}
          </>
        ) : (
          <Button
            type="link"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            style={{
              fontSize: '24px',
              color: isDarkMode ? '#D90429' : '#474747',
            }}
          />
        )}
      </Flex>

      {/* Drawer for Small Screens */}
      <Drawer
        title={t('MENU')}
        placement={i18n.language == LANGUAGES_KEYS.ENGLISH ? 'left' : 'right'}
        closable={true}
        onClose={closeDrawer}
        open={drawerVisible}
        width={250}
      >
        <Menu
          items={mobileMenuItems}
          mode="vertical"
          style={{
            textAlign: 'left',
            background: 'transparent',
            border: 'none',
          }}
        />
      </Drawer>
    </Flex>
  );
};

export default HeaderComponent;

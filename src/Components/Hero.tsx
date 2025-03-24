import { Button, Flex, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MAIN_LINKS } from '../Constants/Links';

const { Title, Text } = Typography;

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Flex
      vertical
      justify="center"
      align="center"
      gap="small"
      {...{
        style: {
          paddingTop: 'clamp(40px, 10vw, 160px)',
          paddingRight: 'clamp(16px, 3vw, 50px)',
          paddingBottom: 'clamp(40px, 5vw, 80px)',
          paddingLeft: 'clamp(16px, 3vw, 50px)',
          maxWidth: 'clamp(350px, 68vw, 974px)',
          margin: '0 auto',
        },
      }}
    >
      <Title {...{ style: { textAlign: 'center' } }}>
        {t('HERO_MAIN_TITLE')}
      </Title>
      <Text {...{ style: { textAlign: 'center' } }}>
        {t('HERO_MAIN_DESCRIPTION')}
      </Text>
      <Button
        type="primary"
        {...{ style: { marginTop: 'clamp(32px, 5vh, 60px)' } }}
      >
        <Link to={MAIN_LINKS.SIGN_IN}>{t('HERO_MAIN_BUTTON_TEXT')}</Link>
      </Button>
    </Flex>
  );
};

export default Hero;

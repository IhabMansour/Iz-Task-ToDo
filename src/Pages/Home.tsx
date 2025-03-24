import { useTranslation } from 'react-i18next';
import DescriptiveContent from '../Components/DescriptiveContent';
import Hero from '../Components/Hero';
import TwoSectionCard from '../Components/TwoSectionCard';
import HomeImage from '../assets/HomeImage.png';
import TwoSectionCard1 from '../assets/TwoSectionCard1.png';
import TwoSectionCard2 from '../assets/TwoSectionCard2.png';
import { Flex } from 'antd';
import useIsMobile from '../Hooks/UseIsMobile';
import { Link } from 'react-router-dom';
import { MAIN_LINKS } from '../Constants/Links';

const Home = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <>
      <Hero />
      <DescriptiveContent />
      <TwoSectionCard
        subTitle={t('TWO_Section_Card_1_SUB_TITLE')}
        mainTitle={t('TWO_Section_Card_1_MAIN_TITLE')}
        description={t('TWO_Section_Card_1_DESCRIPTION')}
        image={TwoSectionCard1}
      />
      <Flex justify="center">
        <Link
          to={MAIN_LINKS.SIGN_IN}
          style={{
            width: '100%',
            maxWidth: isMobile ? '100%' : '79%',
          }}
        >
          <img
            src={HomeImage}
            alt="Home Image"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Link>
      </Flex>
      <TwoSectionCard
        subTitle={t('TWO_Section_Card_2_SUB_TITLE')}
        mainTitle={t('TWO_Section_Card_2_MAIN_TITLE')}
        description={t('TWO_Section_Card_2_DESCRIPTION')}
        image={TwoSectionCard2}
        isReverseDir
      />
    </>
  );
};

export default Home;

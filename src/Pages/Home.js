import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs(_Fragment, { children: [_jsx(Hero, {}), _jsx(DescriptiveContent, {}), _jsx(TwoSectionCard, { subTitle: t('TWO_Section_Card_1_SUB_TITLE'), mainTitle: t('TWO_Section_Card_1_MAIN_TITLE'), description: t('TWO_Section_Card_1_DESCRIPTION'), image: TwoSectionCard1 }), _jsx(Flex, { justify: "center", children: _jsx(Link, { to: MAIN_LINKS.SIGN_IN, style: {
                        width: '100%',
                        maxWidth: isMobile ? '100%' : '79%',
                    }, children: _jsx("img", { src: HomeImage, alt: "Home Image", style: {
                            width: '100%',
                            height: 'auto',
                        } }) }) }), _jsx(TwoSectionCard, { subTitle: t('TWO_Section_Card_2_SUB_TITLE'), mainTitle: t('TWO_Section_Card_2_MAIN_TITLE'), description: t('TWO_Section_Card_2_DESCRIPTION'), image: TwoSectionCard2, isReverseDir: true })] }));
};
export default Home;

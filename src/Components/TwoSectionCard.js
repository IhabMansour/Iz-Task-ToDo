import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Typography } from 'antd';
import useIsMobile from '../Hooks/UseIsMobile';
const { Text, Title, Paragraph } = Typography;
const TwoSectionCard = ({ subTitle, mainTitle, description, image, isReverseDir, }) => {
    const isMobile = useIsMobile();
    return (_jsxs(Flex, { gap: "large", style: {
            paddingTop: 'clamp(40px, 10vw, 140px)',
            paddingRight: 'clamp(16px, 8vw, 128px)',
            paddingBottom: 'clamp(40px, 5vw, 100px)',
            paddingLeft: 'clamp(16px, 8vw, 128px)',
            flexDirection: isReverseDir
                ? `${isMobile ? 'column' : 'row'}-reverse`
                : `${isMobile ? 'column' : 'row'}`,
        }, children: [_jsxs(Flex, { vertical: true, justify: "center", style: { width: !isMobile ? '50%' : '100%' }, children: [_jsx(Text, { style: {
                            textAlign: isMobile ? 'center' : 'left',
                            color: '#D90429',
                        }, children: subTitle }), _jsx(Title, { style: { textAlign: isMobile ? 'center' : 'left' }, children: mainTitle }), _jsx(Paragraph, { style: { textAlign: isMobile ? 'center' : 'left' }, children: description })] }), _jsx("div", { children: _jsx("img", { src: image, alt: "Card Image", style: { width: '100%', height: 'auto' } }) })] }));
};
export default TwoSectionCard;

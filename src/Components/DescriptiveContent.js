import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Col, Flex, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import useIsTablet from '../Hooks/UseIsTablet';
import DescriptiveContentIcon from '../Icons/DescriptiveContentIcon';
const { Title } = Typography;
const DescriptiveContent = () => {
    const { t } = useTranslation();
    const isTabletScreen = useIsTablet();
    return (_jsxs(Flex, { justify: "center", align: "center", style: {
            position: 'relative',
            background: isTabletScreen ? '#FBE6EA' : 'unset',
        }, children: [!isTabletScreen && (_jsx(Col, { children: _jsx(DescriptiveContentIcon, {}) })), _jsxs(Row, { gutter: [40, 40], justify: "center", style: {
                    marginRight: 'clamp(16px, 3vw, 50px)',
                    marginLeft: 'clamp(16px, 3vw, 50px)',
                    position: !isTabletScreen ? 'absolute' : 'unset',
                }, children: [_jsx(Col, { xs: 24, sm: 24, md: 12, lg: 8, xl: 8, children: _jsx(Title, { level: 5, style: {
                                maxWidth: !isTabletScreen ? 320 : '100%',
                                textAlign: 'center',
                            }, children: t('Descriptive_Content_1') }) }), _jsx(Col, { xs: 24, sm: 24, md: 12, lg: 8, xl: 8, children: _jsx(Title, { level: 5, style: {
                                maxWidth: !isTabletScreen ? 320 : '100%',
                                textAlign: 'center',
                            }, children: t('Descriptive_Content_2') }) }), _jsx(Col, { xs: 24, sm: 24, md: 12, lg: 8, xl: 8, children: _jsx(Title, { level: 5, style: {
                                maxWidth: !isTabletScreen ? 320 : '100%',
                                textAlign: 'center',
                            }, children: t('Descriptive_Content_3') }) })] })] }));
};
export default DescriptiveContent;

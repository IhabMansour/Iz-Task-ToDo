import { jsx as _jsx } from "react/jsx-runtime";
import { Flex } from 'antd';
import FooterLogoIcon from '../Icons/FooterLogoIcon';
const FooterComponent = () => {
    return (_jsx(Flex, { justify: "center", align: "center", children: _jsx(FooterLogoIcon, {}) }));
};
export default FooterComponent;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Col, Row } from 'antd';
import useIsMobile from '../Hooks/UseIsMobile';
import SignInImage from '../assets/SignIn.png';
import HeaderComponent from './Header';
import FooterComponent from './Footer';
const AuthPagesLayout = ({ children }) => {
    const isMobile = useIsMobile();
    return (_jsxs(Row, { style: { minHeight: '100vh' }, children: [_jsx(Col, { xs: 0, sm: 0, md: 0, lg: 8, xl: 8, style: { display: isMobile ? 'none' : 'flex', height: '100%' }, children: _jsx("img", { src: SignInImage, alt: "Sign In Image", style: {
                        width: '100%',
                        height: 'auto',
                    } }) }), _jsxs(Col, { xs: 24, sm: 24, md: 24, lg: 16, xl: 16, style: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }, children: [_jsx(HeaderComponent, { specialHeader: true }), children, _jsx(FooterComponent, {})] })] }));
};
export default AuthPagesLayout;

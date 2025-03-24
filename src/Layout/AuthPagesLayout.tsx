import { Col, Row } from 'antd';
import useIsMobile from '../Hooks/UseIsMobile';
import SignInImage from '../assets/SignIn.png';
import HeaderComponent from './Header';
import FooterComponent from './Footer';
import { ReactNode } from 'react';
import { FC } from 'react';

interface AuthPagesLayoutProps {
  children: ReactNode;
}
const AuthPagesLayout: FC<AuthPagesLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <Row style={{ minHeight: '100vh' }}>
      <Col
        xs={0}
        sm={0}
        md={0}
        lg={8}
        xl={8}
        style={{ display: isMobile ? 'none' : 'flex', height: '100%' }}
      >
        <img
          src={SignInImage}
          alt="Sign In Image"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={16}
        xl={16}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <HeaderComponent specialHeader />

        {children}

        <FooterComponent />
      </Col>
    </Row>
  );
};

export default AuthPagesLayout;

import { Col, Flex, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import useIsTablet from '../Hooks/UseIsTablet';
import DescriptiveContentIcon from '../Icons/DescriptiveContentIcon';

const { Title } = Typography;

const DescriptiveContent = () => {
  const { t } = useTranslation();
  const isTabletScreen = useIsTablet();

  return (
    <Flex
      justify="center"
      align="center"
      {...{
        style: {
          position: 'relative',
          background: isTabletScreen ? '#FBE6EA' : 'unset',
        },
      }}
    >
      {!isTabletScreen && (
        <Col>
          <DescriptiveContentIcon />
        </Col>
      )}
      <Row
        gutter={[40, 40]}
        justify="center"
        {...{
          style: {
            marginRight: 'clamp(16px, 3vw, 50px)',
            marginLeft: 'clamp(16px, 3vw, 50px)',
            position: !isTabletScreen ? 'absolute' : 'unset',
          },
        }}
      >
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Title
            level={5}
            {...{
              style: {
                maxWidth: !isTabletScreen ? 320 : '100%',
                textAlign: 'center',
              },
            }}
          >
            {t('Descriptive_Content_1')}
          </Title>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Title
            level={5}
            {...{
              style: {
                maxWidth: !isTabletScreen ? 320 : '100%',
                textAlign: 'center',
              },
            }}
          >
            {t('Descriptive_Content_2')}
          </Title>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Title
            level={5}
            {...{
              style: {
                maxWidth: !isTabletScreen ? 320 : '100%',
                textAlign: 'center',
              },
            }}
          >
            {t('Descriptive_Content_3')}
          </Title>
        </Col>
      </Row>
    </Flex>
  );
};

export default DescriptiveContent;

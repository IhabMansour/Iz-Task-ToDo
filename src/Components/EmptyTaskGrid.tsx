import { Button, Col, Flex, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import useIsMobile from '../Hooks/UseIsMobile';
import CircleCreateTask from '../Icons/CircleCreateTask';

const { Text } = Typography;

const EmptyTaskGrid = () => {
  const { t } = useTranslation();
  const isMobileScreen = useIsMobile();

  return (
    <Flex
      align="center"
      gap="middle"
      {...{
        style: {
          minHeight: '76vh',
          padding: 'clamp(16px, 3vw, 50px)',
          flexDirection: isMobileScreen ? 'column-reverse' : 'row',
          justifyContent: isMobileScreen ? 'flex-end' : 'flex-start',
        },
      }}
    >
      <Col
        {...{
          style: {
            background: '#FBE6EA',
            minHeight: isMobileScreen ? '25vh' : '67vh',
            width: isMobileScreen ? '100%' : '400px',
            padding: '16px',
            borderRadius: '8px',
          },
        }}
      >
        <Text>Done (0)</Text>
      </Col>
      <Col
        {...{
          style: {
            background: '#FBE6EA',
            minHeight: isMobileScreen ? '25vh' : '67vh',
            width: isMobileScreen ? '100%' : '120px',
            padding: '16px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      >
        <Button color="default" variant="link" icon={<CircleCreateTask />} />
        <Text>{t('CREATE_TASK')}</Text>
      </Col>
    </Flex>
  );
};

export default EmptyTaskGrid;

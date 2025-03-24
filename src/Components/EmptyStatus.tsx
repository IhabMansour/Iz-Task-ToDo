import { Button, Flex, Typography } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import EmptyStatusIcon from '../Icons/EmptyStatusIcon';

const { Title, Text } = Typography;

interface EmptyStatusProps {
  handleCreateNewStatus?: () => void;
}

const EmptyStatus: FC<EmptyStatusProps> = ({
  handleCreateNewStatus = () => {},
}) => {
  const { t } = useTranslation();

  return (
    <Flex
      vertical
      align="center"
      justify="center"
      gap="middle"
      {...{ style: { minHeight: '80vh' } }}
    >
      <Button
        color="default"
        variant="link"
        icon={<EmptyStatusIcon />}
        {...{ style: { height: 'fit-content' } }}
      />

      <Title level={2}>{t('EMPTY_STATUS_TITLE')}</Title>

      <Text>{t('EMPTY_STATUS_DESCRIPTION')}</Text>

      <Button type="primary" onClick={handleCreateNewStatus}>
        {t('CREATE_NEW_STATUS')}
      </Button>
    </Flex>
  );
};

export default EmptyStatus;

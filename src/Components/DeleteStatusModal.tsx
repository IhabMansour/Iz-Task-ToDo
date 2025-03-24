import { Button, Modal, Typography } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

interface DeleteStatusModalProps {
  isModalOpen?: boolean;
  handleDeleteTask?: () => void;
}

const DeleteStatusModal: FC<DeleteStatusModalProps> = ({
  isModalOpen,
  handleDeleteTask = () => {},
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      title={t('DELETE_STATUS')}
      open={isModalOpen}
      footer={null}
      styles={{ body: { display: 'flex', flexDirection: 'column' } }}
    >
      <Title level={2} {...{ style: { textAlign: 'center' } }}>
        {t('DELETE_STATUS_TITLE')}
      </Title>

      <Text {...{ style: { textAlign: 'center', marginBottom: 40 } }}>
        {t('DELETE_STATUS_DESCRIPTION')}
      </Text>

      <Button
        type="primary"
        {...{ style: { width: '100%' } }}
        onClick={handleDeleteTask}
      >
        {t('DELETE_THE_STATUS_BUTTON')}
      </Button>
    </Modal>
  );
};

export default DeleteStatusModal;

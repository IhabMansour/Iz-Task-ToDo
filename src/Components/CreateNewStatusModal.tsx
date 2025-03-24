import { Button, ColorPicker, Form, FormProps, Input, Modal } from 'antd';
import { AggregationColor } from 'antd/es/color-picker/color';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useTaskContext } from '../Contexts/TaskContext';
import { createStatus } from '../Services/StatusServices';

interface CreateNewStatusModalProps {
  isModalOpen?: boolean;
  handleCloseModal?: () => void;
}

type FieldType = {
  title: string;
  color: AggregationColor | string;
};

const CreateNewStatusModal: FC<CreateNewStatusModalProps> = ({
  isModalOpen,
  handleCloseModal = () => {},
}) => {
  const { t } = useTranslation();
  const { fetchStatuses } = useTaskContext();

  const onFinish: FormProps<FieldType>['onFinish'] = ({ title, color }) => {
    const parsedColor =
      typeof color === 'string' ? color : color?.toHexString();

    createStatus(title, parsedColor).then(() => fetchStatuses());

    handleCloseModal();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal
      title={t('CREATE_STATUS')}
      open={isModalOpen}
      onCancel={handleCloseModal}
      footer={null}
    >
      <Form
        name="createSTATUS"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
        initialValues={{ color: '#1677ff' }}
      >
        <Form.Item<FieldType>
          label={t('STATUS_TITLE')}
          name="title"
          layout="vertical"
          rules={[
            {
              required: true,
              message: t('STATUS_TITLE_ERROR_MESSAGE'),
            },
          ]}
        >
          <Input placeholder={t('STATUS_TITLE')} />
        </Form.Item>

        <Form.Item
          label={t('STATUS_COLOR')}
          name="color"
          layout="vertical"
          rules={[
            {
              required: true,
              message: t('STATUS_COLOR_ERROR_MESSAGE'),
            },
          ]}
        >
          <ColorPicker showText />
        </Form.Item>

        <Form.Item label={null}>
          <Button
            type="primary"
            htmlType="submit"
            {...{ style: { width: '100%' } }}
          >
            {t('SAVE')}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateNewStatusModal;

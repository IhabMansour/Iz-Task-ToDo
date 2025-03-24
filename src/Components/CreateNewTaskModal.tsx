import { Button, Form, FormProps, Input, Modal, Select } from 'antd';
import { useMemo } from 'react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useTaskContext } from '../Contexts/TaskContext';
import { createTask } from '../Services/TaskServices';

interface CreateNewTaskModalProps {
  isModalOpen?: boolean;
  handleCloseModal?: () => void;
}

type FieldType = {
  title: string;
  description: string;
  statusId: string;
};

const CreateNewTaskModal: FC<CreateNewTaskModalProps> = ({
  isModalOpen,
  handleCloseModal = () => {},
}) => {
  const { t } = useTranslation();
  const { statuses, fetchTasks } = useTaskContext();

  const onFinish: FormProps<FieldType>['onFinish'] = async ({
    title,
    description,
    statusId,
  }) => {
    createTask(title, description, statusId).then(() => fetchTasks());
    handleCloseModal();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

  const getStatusMenu = useMemo(() => {
    return statuses?.map((status) => {
      return {
        label: status.title,
        value: status.id,
      };
    });
  }, [statuses]);

  return (
    <Modal
      title={t('CREATE_TASK')}
      open={isModalOpen}
      onCancel={handleCloseModal}
      footer={null}
    >
      <Form
        name="createTask"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item<FieldType>
          label={t('TASK_TITLE')}
          name="title"
          layout="vertical"
          rules={[
            {
              required: true,
              message: t('TASK_TITLE_ERROR_MESSAGE'),
            },
          ]}
        >
          <Input placeholder={t('TASK_TITLE')} />
        </Form.Item>

        <Form.Item
          label={t('DESCRIPTION')}
          name="description"
          layout="vertical"
          rules={[
            {
              required: true,
              message: t('DESCRIPTION_ERROR_MESSAGE'),
            },
          ]}
        >
          <Input.TextArea rows={4} placeholder={t('DESCRIPTION')} />
        </Form.Item>

        <Form.Item
          label={t('STATUS')}
          name="statusId"
          layout="vertical"
          rules={[
            {
              required: true,
              message: t('STATUS_ERROR_MESSAGE'),
            },
          ]}
        >
          <Select placeholder={t('STATUS')} options={getStatusMenu} />
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

export default CreateNewTaskModal;

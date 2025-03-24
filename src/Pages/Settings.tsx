import {
  Button,
  Card,
  Flex,
  Form,
  FormProps,
  Input,
  Spin,
  Typography,
} from 'antd';
import { useTranslation } from 'react-i18next';
import UploadImage from '../Components/UploadImage';
import { useAuth } from '../Contexts/AuthContext';
import useIsMobile from '../Hooks/UseIsMobile';

const { Title, Text } = Typography;

type FieldType = {
  name?: string;
  newPassword?: string;
};

const Settings = () => {
  const { user, updateUser } = useAuth();
  const { t } = useTranslation();
  const isMobileScreen = useIsMobile();

  const onFinish: FormProps<FieldType>['onFinish'] = ({
    name,
    newPassword,
  }) => {
    if (user?.name !== name || newPassword) {
      updateUser(name, newPassword);
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

  if (!user) {
    return (
      <Flex
        justify="center"
        align="center"
        gap="middle"
        {...{ style: { height: '80vh' } }}
      >
        <Spin size="large" />
      </Flex>
    );
  }

  return (
    <Flex
      vertical
      gap="24px"
      {...{
        style: {
          padding: 'clamp(16px, 3vw, 50px)',
          margin: '0 auto',
        },
      }}
    >
      <Title level={2}>{t('SETTINGS')}</Title>

      <Card
        actions={[
          <Button
            type="primary"
            htmlType="submit"
            form="settings-form-name"
            {...{
              style: {
                width: isMobileScreen ? '100%' : 'fit-content',
                margin: '12px 0',
                textAlign: 'right',
              },
            }}
          >
            {t('SAVE')}
          </Button>,
        ]}
        {...{ styles: { actions: { padding: '0 24px' } } }}
      >
        <Text>{t('PERSONAL_INFORMATION')}</Text>

        <Flex {...{ style: { margin: '24px 0' } }}>
          <UploadImage />
        </Flex>

        <Form
          id="settings-form-name"
          name="Settings-name"
          style={{ maxWidth: 'clamp(320px, 40vw, 512px)', width: '100%' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          initialValues={{ name: user?.name }}
        >
          <Form.Item<FieldType>
            label={t('FULL_NAME')}
            name="name"
            layout="vertical"
            rules={[
              {
                required: true,
                message: t('NAME_ERROR_MESSAGE'),
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Card>

      <Card
        actions={[
          <Button
            type="primary"
            htmlType="submit"
            form="settings-form-password"
            {...{
              style: {
                width: isMobileScreen ? '100%' : 'fit-content',
                margin: '12px 0',
                textAlign: 'right',
              },
            }}
          >
            {t('SAVE')}
          </Button>,
        ]}
        {...{ styles: { actions: { padding: '0 24px' } } }}
      >
        <Text>{t('PASSWORD')}</Text>

        <Form
          id="settings-form-password"
          name="Settings-password"
          style={{ maxWidth: 'clamp(320px, 40vw, 512px)', width: '100%' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          initialValues={{ name: user?.name }}
        >
          <Form.Item<FieldType>
            label={t('NEW_PASSWORD')}
            name="newPassword"
            layout="vertical"
            rules={[
              {
                required: true,
                message: t('PASSWORD_ERROR_MESSAGE'),
              },
              {
                min: 8,
                max: 50,
                message: t('PASSWORD_LENGTH_ERROR_MESSAGE'),
              },
              {
                pattern: /^(?=.*[a-zA-Z])(?=.*[^\w\s]).{8,50}$/,
                message: t('PASSWORD_FORMAT_ERROR_MESSAGE'),
              },
            ]}
            style={{
              maxWidth: 'clamp(320px, 40vw, 512px)',
              width: '100%',
              marginTop: '24px',
            }}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
};

export default Settings;

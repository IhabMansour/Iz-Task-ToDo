import { Button, Flex, Form, FormProps, Input, Typography } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import UploadImage from '../Components/UploadImage';
import { MAIN_LINKS } from '../Constants/Links';
import { useAuth } from '../Contexts/AuthContext';
import AuthPagesLayout from '../Layout/AuthPagesLayout';

const { Title, Text } = Typography;

type FieldType = {
  name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const { t } = useTranslation();
  const { register } = useAuth();
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>['onFinish'] = async ({
    name,
    email,
    password,
  }) => {
    try {
      await register(email, password, name);
      navigate(MAIN_LINKS.TODO);
    } catch (err) {
      console.error(err);
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <AuthPagesLayout>
      <Flex
        vertical
        justify="center"
        align="center"
        gap="middle"
        {...{ style: { padding: '16px', width: '100%' } }}
      >
        <Title>{t('SIGN_UP_CREATE_AN_ACCOUNT')}</Title>

        <Text {...{ style: { textAlign: 'center' } }}>
          {t('SIGN_UP_DESCRIPTION')}
        </Text>

        <Form
          name="SignUp"
          style={{ maxWidth: 'clamp(320px, 40vw, 512px)', width: '100%' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType> label={null}>
            <UploadImage />
          </Form.Item>

          <Form.Item<FieldType>
            label={t('NAME')}
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

          <Form.Item<FieldType>
            label={t('EMAIL')}
            name="email"
            layout="vertical"
            rules={[
              {
                required: true,
                type: 'email',
                message: t('EMAIL_ERROR_MESSAGE'),
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label={t('PASSWORD')}
            name="password"
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
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button
              type="primary"
              htmlType="submit"
              {...{ style: { width: '100%' } }}
            >
              {t('SIGN_UP')}
            </Button>
          </Form.Item>
        </Form>

        <Text>
          {t('SIGN_UP_ALREADY_HAVE_AN_ACCOUNT')}{' '}
          <Link to={MAIN_LINKS.SIGN_IN}>{t('SIGN_IN')}</Link>
        </Text>
      </Flex>
    </AuthPagesLayout>
  );
};

export default SignUp;

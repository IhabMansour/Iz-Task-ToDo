import { Button, Flex, Form, FormProps, Input, Typography } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { MAIN_LINKS } from '../Constants/Links';
import { useAuth } from '../Contexts/AuthContext';
import AuthPagesLayout from '../Layout/AuthPagesLayout';

const { Title, Text } = Typography;

type FieldType = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onFinish: FormProps<FieldType>['onFinish'] = async ({
    email,
    password,
  }) => {
    try {
      await login(email, password);
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
        <Title>{t('SIGN_IN')}</Title>

        <Text {...{ style: { textAlign: 'center' } }}>
          {t('SIGN_IN_DESCRIPTION')}
        </Text>

        <Form
          name="SignIn"
          style={{ maxWidth: 'clamp(320px, 40vw, 512px)', width: '100%' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
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
              {t('SIGN_IN')}
            </Button>
          </Form.Item>
        </Form>

        <Text>
          {t('SIGN_UP_DONT_HAVE_AN_ACCOUNT')}{' '}
          <Link to={MAIN_LINKS.SIGN_UP}>{t('SIGN_UP')}</Link>
        </Text>
      </Flex>
    </AuthPagesLayout>
  );
};

export default SignIn;

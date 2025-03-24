import { Button, Flex, Typography } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import EmptyTaskIcon from '../Icons/EmptyTaskIcon';

const { Title, Text } = Typography;

interface EmptyTaskProps {
  handleCreateNewTask?: () => void;
}

const EmptyTask: FC<EmptyTaskProps> = ({ handleCreateNewTask }) => {
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
        icon={<EmptyTaskIcon />}
        {...{ style: { height: 'fit-content' } }}
      />

      <Title level={2}>{t('EMPTY_TASK_TITLE')}</Title>

      <Text>{t('EMPTY_TASK_DESCRIPTION')}</Text>

      <Button type="primary" onClick={handleCreateNewTask}>
        {t('CREATE_NEW_TASK')}
      </Button>
    </Flex>
  );
};

export default EmptyTask;

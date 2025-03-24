import { Button, Flex } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { VIEW_MODE } from '../Constants/SharedConstants';
import { useTaskContext } from '../Contexts/TaskContext';
import useIsMobile from '../Hooks/UseIsMobile';
import LayoutGridIcon from '../Icons/LayoutGridIcon';
import LayoutTableIcon from '../Icons/LayoutTableIcon';

interface ToDoHeaderProps {
  handleOpenCreateTaskModal?: () => void;
}

const ToDoHeader: FC<ToDoHeaderProps> = ({ handleOpenCreateTaskModal }) => {
  const isMobileScreen = useIsMobile();
  const { t } = useTranslation();
  const { view, setView } = useTaskContext();

  return (
    <Flex justify="space-between" wrap gap="small">
      <Flex
        gap="middle"
        {...{ style: { width: isMobileScreen ? '100%' : 'auto' } }}
      >
        <Button
          type={view === VIEW_MODE.TABLE ? 'primary' : 'text'}
          icon={<LayoutTableIcon />}
          onClick={() => setView(VIEW_MODE.TABLE)}
          {...{ style: { width: isMobileScreen ? '50%' : 'auto' } }}
        >
          {t('TABLE')}
        </Button>
        <Button
          type={view === VIEW_MODE.GRID ? 'primary' : 'text'}
          icon={<LayoutGridIcon />}
          onClick={() => setView(VIEW_MODE.GRID)}
          {...{ style: { width: isMobileScreen ? '50%' : 'auto' } }}
        >
          {t('GRID')}
        </Button>
      </Flex>

      <Button
        type="primary"
        onClick={handleOpenCreateTaskModal}
        {...{ style: { width: isMobileScreen ? '100%' : 'auto' } }}
      >
        {t('CREATE_NEW_TASK')}
      </Button>
    </Flex>
  );
};

export default ToDoHeader;

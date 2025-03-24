import {
  Button,
  Dropdown,
  Flex,
  MenuProps,
  Table,
  TableProps,
  Tag,
  Typography,
} from 'antd';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DeleteStatusModal from '../Components/DeleteStatusModal';
import { useTaskContext } from '../Contexts/TaskContext';
import useIsMobile from '../Hooks/UseIsMobile';
import DeleteIcon from '../Icons/DeleteIcon';
import EditIcon from '../Icons/EditIcon';
import FavIcon from '../Icons/FavIcon';
import ZapIcon from '../Icons/ZapIcon';
import { TaskInterface } from '../Interfaces';
import { deleteTask, updateTask } from '../Services/TaskServices';

const { Text } = Typography;

const TaskTableView = () => {
  const { t } = useTranslation();
  const isMobileScreen = useIsMobile();
  const { tasks, statuses, fetchTasks } = useTaskContext();

  const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = useState(false);
  const [deleteTaskID, setDeleteTaskID] = useState('');

  const handleUpdateTask = (taskID: string, statusId: string) => {
    updateTask({ taskID, newStatusId: statusId, newOrderIndex: 1 }).then(() =>
      fetchTasks()
    );
  };

  const handleDeleteTask = () => {
    deleteTask(deleteTaskID).then(() => fetchTasks());
    setIsDeleteTaskModalOpen(false);
  };

  const getFilteredStatuses = (statusId: string) => {
    return statuses?.filter((status) => status.id !== statusId) || [];
  };

  // Function to get menu items for each status
  const getStatusMenuItems = useCallback(
    (statusId: string, taskId: string) => {
      const filteredStatuses = getFilteredStatuses(statusId);
      return [
        {
          key: '51010',
          label: (
            <Button type="text" icon={<ZapIcon />}>
              {t('CHANGE_TO')}
            </Button>
          ),
        },
        ...filteredStatuses?.map((status) => ({
          key: status.id,
          label: (
            <Flex gap="small" align="center">
              <div
                {...{
                  style: {
                    background: status.color,
                    width: 16,
                    height: 16,
                    borderRadius: 4,
                  },
                }}
              />
              <a onClick={() => handleUpdateTask(taskId, status.id)}>
                {status.title}
              </a>
            </Flex>
          ),
        })),
        {
          key: '51000',
          label: (
            <Button type="link" icon={<EditIcon />}>
              {t('EDIT')}
            </Button>
          ),
        },
        {
          key: '51001',
          label: (
            <Button
              type="link"
              icon={<DeleteIcon />}
              onClick={() => {
                setIsDeleteTaskModalOpen(true);
                setDeleteTaskID(taskId);
              }}
            >
              {t('DELETE')}
            </Button>
          ),
        },
      ];
    },
    [statuses, handleUpdateTask, handleDeleteTask]
  );

  const columns: TableProps<TaskInterface>['columns'] = [
    {
      key: 'title',
      title: t('TITLE'),
      dataIndex: 'title',
      render: (text, { isFavorite }) => (
        <Flex gap="small">
          <FavIcon isFavorite={isFavorite} />
          <Text>{text}</Text>
        </Flex>
      ),
      width: '35%',
    },
    {
      key: 'description',
      title: t('DESCRIPTION'),
      dataIndex: 'description',
      ellipsis: true,
      responsive: ['md'],
      width: '50%',
    },
    {
      key: 'status',
      title: t('STATUS'),
      dataIndex: 'status',
      render: (
        _,
        { status: { title, color, id: statusId }, id: taskId, orderIndex }
      ) => (
        <>
          {isMobileScreen ? (
            <div
              {...{
                style: {
                  background: color,
                  width: 16,
                  height: 16,
                  borderRadius: 4,
                },
              }}
            />
          ) : (
            <Flex gap="middle" align="center">
              <Tag color={color} key={statusId}>
                {title}
              </Tag>
              <Dropdown
                menu={{
                  items: getStatusMenuItems(statusId, taskId),
                }}
              >
                <a onClick={(e) => e.preventDefault()}>...</a>
              </Dropdown>
            </Flex>
          )}
        </>
      ),
      width: '15%',
    },
  ];

  return (
    <>
      <Table<TaskInterface>
        columns={columns}
        dataSource={tasks}
        pagination={false}
      />

      <DeleteStatusModal
        isModalOpen={isDeleteTaskModalOpen}
        handleDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default TaskTableView;

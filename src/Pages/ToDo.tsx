import { Flex, Spin } from 'antd';
import { useLayoutEffect, useState } from 'react';
import CreateNewStatusModal from '../Components/CreateNewStatusModal';
import CreateNewTaskModal from '../Components/CreateNewTaskModal';
import EmptyStatus from '../Components/EmptyStatus';
import EmptyTask from '../Components/EmptyTaskTable';
import { VIEW_MODE } from '../Constants/SharedConstants';
import TaskGridView from '../Widgets/GridView';
import TaskTableView from '../Widgets/TableView';
import ToDoHeader from '../Components/ToDoHeader';
import SearchAndFilter from '../Components/SearchAndFilter';
import { useTaskContext } from '../Contexts/TaskContext';
import PaginationComponent from '../Components/Pagination';

const TodoPage = () => {
  const { tasks, statuses, view, isLoading } = useTaskContext();
  const [isCreateNewStatusModalOpen, setIsCreateNewStatusModalOpen] =
    useState(false);
  const [isCreateNewTaskModalOpen, setIsCreateNewTaskModalOpen] =
    useState(false);

  if (isLoading) {
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

  if (!statuses?.length) {
    return (
      <>
        <EmptyStatus
          handleCreateNewStatus={() => setIsCreateNewStatusModalOpen(true)}
        />
        <CreateNewStatusModal
          isModalOpen={isCreateNewStatusModalOpen}
          handleCloseModal={() => setIsCreateNewStatusModalOpen(false)}
        />
      </>
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
      <ToDoHeader
        handleOpenCreateTaskModal={() => setIsCreateNewTaskModalOpen(true)}
      />

      {view === VIEW_MODE.TABLE && (
        <SearchAndFilter
          handleOpenCreateNewStatusModal={() =>
            setIsCreateNewStatusModalOpen(true)
          }
        />
      )}

      {!tasks?.length ? (
        <EmptyTask
          handleCreateNewTask={() => setIsCreateNewTaskModalOpen(true)}
        />
      ) : view === VIEW_MODE.TABLE ? (
        <>
          <TaskTableView />
          <PaginationComponent />
        </>
      ) : (
        <TaskGridView />
      )}

      <CreateNewTaskModal
        isModalOpen={isCreateNewTaskModalOpen}
        handleCloseModal={() => setIsCreateNewTaskModalOpen(false)}
      />

      <CreateNewStatusModal
        isModalOpen={isCreateNewStatusModalOpen}
        handleCloseModal={() => setIsCreateNewStatusModalOpen(false)}
      />
    </Flex>
  );
};

export default TodoPage;

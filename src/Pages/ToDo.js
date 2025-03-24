import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Spin } from 'antd';
import { useState } from 'react';
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
    const [isCreateNewStatusModalOpen, setIsCreateNewStatusModalOpen] = useState(false);
    const [isCreateNewTaskModalOpen, setIsCreateNewTaskModalOpen] = useState(false);
    if (isLoading) {
        return (_jsx(Flex, { justify: "center", align: "center", gap: "middle", style: { height: '80vh' }, children: _jsx(Spin, { size: "large" }) }));
    }
    if (!(statuses === null || statuses === void 0 ? void 0 : statuses.length)) {
        return (_jsxs(_Fragment, { children: [_jsx(EmptyStatus, { handleCreateNewStatus: () => setIsCreateNewStatusModalOpen(true) }), _jsx(CreateNewStatusModal, { isModalOpen: isCreateNewStatusModalOpen, handleCloseModal: () => setIsCreateNewStatusModalOpen(false) })] }));
    }
    return (_jsxs(Flex, { vertical: true, gap: "24px", style: {
            padding: 'clamp(16px, 3vw, 50px)',
            margin: '0 auto',
        }, children: [_jsx(ToDoHeader, { handleOpenCreateTaskModal: () => setIsCreateNewTaskModalOpen(true) }), view === VIEW_MODE.TABLE && (_jsx(SearchAndFilter, { handleOpenCreateNewStatusModal: () => setIsCreateNewStatusModalOpen(true) })), !(tasks === null || tasks === void 0 ? void 0 : tasks.length) ? (_jsx(EmptyTask, { handleCreateNewTask: () => setIsCreateNewTaskModalOpen(true) })) : view === VIEW_MODE.TABLE ? (_jsxs(_Fragment, { children: [_jsx(TaskTableView, {}), _jsx(PaginationComponent, {})] })) : (_jsx(TaskGridView, {})), _jsx(CreateNewTaskModal, { isModalOpen: isCreateNewTaskModalOpen, handleCloseModal: () => setIsCreateNewTaskModalOpen(false) }), _jsx(CreateNewStatusModal, { isModalOpen: isCreateNewStatusModalOpen, handleCloseModal: () => setIsCreateNewStatusModalOpen(false) })] }));
};
export default TodoPage;

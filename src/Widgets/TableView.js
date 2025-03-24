import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Dropdown, Flex, Table, Tag, Typography, } from 'antd';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DeleteStatusModal from '../Components/DeleteStatusModal';
import { useTaskContext } from '../Contexts/TaskContext';
import useIsMobile from '../Hooks/UseIsMobile';
import DeleteIcon from '../Icons/DeleteIcon';
import EditIcon from '../Icons/EditIcon';
import FavIcon from '../Icons/FavIcon';
import ZapIcon from '../Icons/ZapIcon';
import { deleteTask, updateTask } from '../Services/TaskServices';
const { Text } = Typography;
const TaskTableView = () => {
    const { t } = useTranslation();
    const isMobileScreen = useIsMobile();
    const { tasks, statuses, fetchTasks } = useTaskContext();
    const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = useState(false);
    const [deleteTaskID, setDeleteTaskID] = useState('');
    const handleUpdateTask = (taskID, statusId) => {
        updateTask({ taskID, newStatusId: statusId, newOrderIndex: 1 }).then(() => fetchTasks());
    };
    const handleDeleteTask = () => {
        deleteTask(deleteTaskID).then(() => fetchTasks());
        setIsDeleteTaskModalOpen(false);
    };
    const getFilteredStatuses = (statusId) => {
        return (statuses === null || statuses === void 0 ? void 0 : statuses.filter((status) => status.id !== statusId)) || [];
    };
    // Function to get menu items for each status
    const getStatusMenuItems = useCallback((statusId, taskId) => {
        const filteredStatuses = getFilteredStatuses(statusId);
        return [
            {
                key: '51010',
                label: (_jsx(Button, { type: "text", icon: _jsx(ZapIcon, {}), children: t('CHANGE_TO') })),
            },
            ...filteredStatuses === null || filteredStatuses === void 0 ? void 0 : filteredStatuses.map((status) => ({
                key: status.id,
                label: (_jsxs(Flex, { gap: "small", align: "center", children: [_jsx("div", { style: {
                                background: status.color,
                                width: 16,
                                height: 16,
                                borderRadius: 4,
                            } }), _jsx("a", { onClick: () => handleUpdateTask(taskId, status.id), children: status.title })] })),
            })),
            {
                key: '51000',
                label: (_jsx(Button, { type: "link", icon: _jsx(EditIcon, {}), children: t('EDIT') })),
            },
            {
                key: '51001',
                label: (_jsx(Button, { type: "link", icon: _jsx(DeleteIcon, {}), onClick: () => {
                        setIsDeleteTaskModalOpen(true);
                        setDeleteTaskID(taskId);
                    }, children: t('DELETE') })),
            },
        ];
    }, [statuses, handleUpdateTask, handleDeleteTask]);
    const columns = [
        {
            key: 'title',
            title: t('TITLE'),
            dataIndex: 'title',
            render: (text, { isFavorite }) => (_jsxs(Flex, { gap: "small", children: [_jsx(FavIcon, { isFavorite: isFavorite }), _jsx(Text, { children: text })] })),
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
            render: (_, { status: { title, color, id: statusId }, id: taskId, orderIndex }) => (_jsx(_Fragment, { children: isMobileScreen ? (_jsx("div", { style: {
                        background: color,
                        width: 16,
                        height: 16,
                        borderRadius: 4,
                    } })) : (_jsxs(Flex, { gap: "middle", align: "center", children: [_jsx(Tag, { color: color, children: title }, statusId), _jsx(Dropdown, { menu: {
                                items: getStatusMenuItems(statusId, taskId),
                            }, children: _jsx("a", { onClick: (e) => e.preventDefault(), children: "..." }) })] })) })),
            width: '15%',
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Table, { columns: columns, dataSource: tasks, pagination: false }), _jsx(DeleteStatusModal, { isModalOpen: isDeleteTaskModalOpen, handleDeleteTask: handleDeleteTask })] }));
};
export default TaskTableView;

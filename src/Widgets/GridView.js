import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useTaskContext } from '../Contexts/TaskContext';
import { updateTask } from '../Services/TaskServices';
const TaskGridView = () => {
    const { tasks, statuses, fetchTasks } = useTaskContext();
    const handleDrop = (e, newStatusId) => {
        var _a;
        const taskID = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('taskId');
        updateTask({ taskID, newStatusId, newOrderIndex: 1 }).then(() => fetchTasks());
    };
    return (_jsx("div", { style: { display: 'flex', gap: '20px' }, children: statuses === null || statuses === void 0 ? void 0 : statuses.map((status) => (_jsxs(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, style: { border: '1px solid black', padding: '10px', width: '200px' }, onDragOver: (e) => e.preventDefault(), onDrop: (e) => handleDrop(e, status.id), children: [_jsx("h4", { children: status.title }), tasks === null || tasks === void 0 ? void 0 : tasks.filter((task) => task.status.id === status.id).map((task) => (_jsx(motion.div, { draggable: true, onDragStart: (e) => {
                        e.dataTransfer.setData('taskId', task.id);
                        e.dataTransfer.setData('newOrderIndex', task.orderIndex);
                    }, initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { duration: 0.3 }, whileHover: { scale: 1.1 }, style: {
                        padding: '10px',
                        margin: '5px',
                        border: '1px solid gray',
                        cursor: 'grab',
                    }, children: task.title }, task.id)))] }, status.id))) }));
};
export default TaskGridView;

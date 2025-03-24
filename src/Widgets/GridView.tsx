import { motion } from 'framer-motion';
import { useTaskContext } from '../Contexts/TaskContext';
import { updateTask } from '../Services/TaskServices';

const TaskGridView = () => {
  const { tasks, statuses, fetchTasks } = useTaskContext();

  const handleDrop = (e: any, newStatusId: string) => {
    const taskID = e.dataTransfer?.getData('taskId');
    updateTask({ taskID, newStatusId, newOrderIndex: 1 }).then(() =>
      fetchTasks()
    );
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {statuses?.map((status) => (
        <motion.div
          key={status.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ border: '1px solid black', padding: '10px', width: '200px' }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, status.id)}
        >
          <h4>{status.title}</h4>
          {tasks
            ?.filter((task) => task.status.id === status.id)
            .map((task) => (
              <motion.div
                key={task.id}
                draggable
                onDragStart={(e: any) => {
                  e.dataTransfer.setData('taskId', task.id);
                  e.dataTransfer.setData('newOrderIndex', task.orderIndex);
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                style={{
                  padding: '10px',
                  margin: '5px',
                  border: '1px solid gray',
                  cursor: 'grab',
                }}
              >
                {task.title}
              </motion.div>
            ))}
        </motion.div>
      ))}
    </div>
  );
};

export default TaskGridView;

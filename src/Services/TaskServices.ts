import { FetchTaskProps, UpdateTaskProps } from '../Interfaces';
import { axiosRequest } from './AxiosService';

// Create a new task
export const createTask = async (
  title: string,
  description: string,
  statusId: string
) => {
  return axiosRequest('POST', '/task', { title, description, statusId });
};

export const getTaskByID = async (taskID: string) => {
  return axiosRequest('POST', `/task/${taskID}`);
};

// Get all tasks
export const getAllTasks = async ({
  querySearch,
  statusId,
  page,
  limit,
}: FetchTaskProps) => {
  const body = Object.fromEntries(
    Object.entries({ q: querySearch, statusId, page, limit }).filter(
      ([key, value]) => value
    )
  );

  return axiosRequest('GET', '/task/search', {}, {}, body);
};

// Update an existing task
export const updateTask = async ({
  taskID,
  title,
  description,
  newOrderIndex,
  newStatusId,
}: UpdateTaskProps) => {
  const body = Object.fromEntries(
    Object.entries({ title, description, newOrderIndex, newStatusId }).filter(
      ([key, value]) => value
    )
  );

  return axiosRequest('PATCH', `/task/${taskID}`, body);
};

// Delete a task
export const deleteTask = async (taskID: string) => {
  return axiosRequest('DELETE', `/task/${taskID}`);
};

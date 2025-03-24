import { axiosRequest } from './AxiosService';

// Create a new status
export const createStatus = async (title: string, color: string) => {
  return axiosRequest('POST', '/status', { title, color });
};

// Get all statuses
export const getAllStatuses = async () => {
  return axiosRequest('GET', '/status');
};

// Update an existing status
export const updateStatus = async (
  statusID: string,
  title: string,
  color: string,
  newOrderIndex: number
) => {
  // Dynamically build the body by filtering out falsy values
  const body = Object.fromEntries(
    Object.entries({ title, color, newOrderIndex }).filter(
      ([key, value]) => value
    )
  );

  return axiosRequest('PATCH', `/status/${statusID}`, body);
};

// Delete a status
export const deleteStatus = async (statusID: string) => {
  return axiosRequest('DELETE', `/status/${statusID}`);
};

export const getTasksBYStatusID = async (taskID: string) => {
  return axiosRequest('GET', `/status/allTasks/${taskID}`);
};

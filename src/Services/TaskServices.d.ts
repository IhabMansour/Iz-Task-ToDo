import { FetchTaskProps, UpdateTaskProps } from '../Interfaces';
export declare const createTask: (title: string, description: string, statusId: string) => Promise<any>;
export declare const getTaskByID: (taskID: string) => Promise<any>;
export declare const getAllTasks: ({ querySearch, statusId, page, limit, }: FetchTaskProps) => Promise<any>;
export declare const updateTask: ({ taskID, title, description, newOrderIndex, newStatusId, }: UpdateTaskProps) => Promise<any>;
export declare const deleteTask: (taskID: string) => Promise<any>;

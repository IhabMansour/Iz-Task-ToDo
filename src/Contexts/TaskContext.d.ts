import { Dispatch, SetStateAction } from 'react';
import { FetchTaskProps, StatusInterface, TaskInterface } from '../Interfaces';
import { FC } from 'react';
import { ReactNode } from 'react';
interface TaskContextProps {
    tasks: TaskInterface[];
    setTasks: Dispatch<SetStateAction<TaskInterface[]>>;
    statuses: StatusInterface[];
    setStatuses: Dispatch<SetStateAction<StatusInterface[]>>;
    queryString: string;
    setQueryString: Dispatch<SetStateAction<string>>;
    selectedStatusID: string;
    setSelectedStatusID: Dispatch<SetStateAction<string>>;
    view: string;
    setView: Dispatch<SetStateAction<string>>;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    totalNumTasks: number;
    isLoading: boolean;
    fetchTasks: (params?: FetchTaskProps) => void;
    fetchStatuses: () => void;
}
interface TaskProviderProps {
    children?: ReactNode;
}
export declare const TaskProvider: FC<TaskProviderProps>;
export declare const useTaskContext: () => TaskContextProps;
export {};

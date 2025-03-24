import {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { VIEW_MODE } from '../Constants/SharedConstants';
import { getAllStatuses } from '../Services/StatusServices';
import { getAllTasks } from '../Services/TaskServices';
import { useCallback } from 'react';
import { FetchTaskProps, StatusInterface, TaskInterface } from '../Interfaces';
import { FC } from 'react';
import { ReactNode } from 'react';

interface TaskContextProps {
  tasks: TaskInterface[];
  setTasks: Dispatch<SetStateAction<TaskInterface[]>>; // Correctly type setTasks
  statuses: StatusInterface[];
  setStatuses: Dispatch<SetStateAction<StatusInterface[]>>; // Assuming you're using a similar approach for statuses
  queryString: string;
  setQueryString: Dispatch<SetStateAction<string>>;
  selectedStatusID: string;
  setSelectedStatusID: Dispatch<SetStateAction<string>>;
  view: string;
  setView: Dispatch<SetStateAction<string>>; // Assuming view is a string
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

const TaskContext = createContext<TaskContextProps>({} as any);

export const TaskProvider: FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [statuses, setStatuses] = useState<StatusInterface[]>([]);
  const [totalNumTasks, setTotalNumTasks] = useState(0);
  const [queryString, setQueryString] = useState('');
  const [selectedStatusID, setSelectedStatusID] = useState('');
  const [view, setView] = useState(VIEW_MODE.TABLE);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchStatuses = async () => {
    setIsLoading(true);
    await getAllStatuses()
      .then((res) => {
        setStatuses(res?.status);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  const filterBody = useCallback(() => {
    return {
      queryString,
      statusId: selectedStatusID,
      page,
    } as FetchTaskProps;
  }, [queryString, selectedStatusID, page]);

  const fetchTasks = async () => {
    setIsLoading(true);
    await getAllTasks(filterBody())
      .then((res) => {
        setTasks(res?.tasks);
        setTotalNumTasks(res?.totalTasks);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchStatuses();
  }, []); // Fetch tasks and statuses when component mounts

  useEffect(() => {
    setPage(1);
    fetchTasks();
  }, [queryString, selectedStatusID]);

  // Fetch tasks for the current page when page changes
  useEffect(() => {
    fetchTasks();
  }, [page]); // Fetch tasks when page changes

  return (
    <TaskContext.Provider
      value={{
        tasks,
        statuses,
        queryString,
        selectedStatusID,
        view,
        totalNumTasks,
        page,
        isLoading,

        setTasks,
        setStatuses,
        setQueryString,
        setSelectedStatusID,
        setView,
        setPage,

        fetchTasks,
        fetchStatuses,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect, } from 'react';
import { VIEW_MODE } from '../Constants/SharedConstants';
import { getAllStatuses } from '../Services/StatusServices';
import { getAllTasks } from '../Services/TaskServices';
import { useCallback } from 'react';
const TaskContext = createContext({});
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [totalNumTasks, setTotalNumTasks] = useState(0);
    const [queryString, setQueryString] = useState('');
    const [selectedStatusID, setSelectedStatusID] = useState('');
    const [view, setView] = useState(VIEW_MODE.TABLE);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const fetchStatuses = () => __awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        yield getAllStatuses()
            .then((res) => {
            setStatuses(res === null || res === void 0 ? void 0 : res.status);
            setIsLoading(false);
        })
            .catch(() => setIsLoading(false));
    });
    const filterBody = useCallback(() => {
        return {
            queryString,
            statusId: selectedStatusID,
            page,
        };
    }, [queryString, selectedStatusID, page]);
    const fetchTasks = () => __awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        yield getAllTasks(filterBody())
            .then((res) => {
            setTasks(res === null || res === void 0 ? void 0 : res.tasks);
            setTotalNumTasks(res === null || res === void 0 ? void 0 : res.totalTasks);
            setIsLoading(false);
        })
            .catch(() => setIsLoading(false));
    });
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
    return (_jsx(TaskContext.Provider, { value: {
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
        }, children: children }));
};
export const useTaskContext = () => useContext(TaskContext);

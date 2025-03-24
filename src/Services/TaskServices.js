var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { axiosRequest } from './AxiosService';
// Create a new task
export const createTask = (title, description, statusId) => __awaiter(void 0, void 0, void 0, function* () {
    return axiosRequest('POST', '/task', { title, description, statusId });
});
export const getTaskByID = (taskID) => __awaiter(void 0, void 0, void 0, function* () {
    return axiosRequest('POST', `/task/${taskID}`);
});
// Get all tasks
export const getAllTasks = (_a) => __awaiter(void 0, [_a], void 0, function* ({ querySearch, statusId, page, limit, }) {
    const body = Object.fromEntries(Object.entries({ q: querySearch, statusId, page, limit }).filter(([key, value]) => value));
    return axiosRequest('GET', '/task/search', {}, {}, body);
});
// Update an existing task
export const updateTask = (_a) => __awaiter(void 0, [_a], void 0, function* ({ taskID, title, description, newOrderIndex, newStatusId, }) {
    const body = Object.fromEntries(Object.entries({ title, description, newOrderIndex, newStatusId }).filter(([key, value]) => value));
    return axiosRequest('PATCH', `/task/${taskID}`, body);
});
// Delete a task
export const deleteTask = (taskID) => __awaiter(void 0, void 0, void 0, function* () {
    return axiosRequest('DELETE', `/task/${taskID}`);
});

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
// Create a new status
export const createStatus = (title, color) => __awaiter(void 0, void 0, void 0, function* () {
    return axiosRequest('POST', '/status', { title, color });
});
// Get all statuses
export const getAllStatuses = () => __awaiter(void 0, void 0, void 0, function* () {
    return axiosRequest('GET', '/status');
});
// Update an existing status
export const updateStatus = (statusID, title, color, newOrderIndex) => __awaiter(void 0, void 0, void 0, function* () {
    // Dynamically build the body by filtering out falsy values
    const body = Object.fromEntries(Object.entries({ title, color, newOrderIndex }).filter(([key, value]) => value));
    return axiosRequest('PATCH', `/status/${statusID}`, body);
});
// Delete a status
export const deleteStatus = (statusID) => __awaiter(void 0, void 0, void 0, function* () {
    return axiosRequest('DELETE', `/status/${statusID}`);
});
export const getTasksBYStatusID = (taskID) => __awaiter(void 0, void 0, void 0, function* () {
    return axiosRequest('GET', `/status/allTasks/${taskID}`);
});

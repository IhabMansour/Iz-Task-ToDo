var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { API_DOMAIN } from '../Constants/SharedConstants';
const getToken = () => localStorage.getItem('token');
const buildQueryString = (params) => {
    const queryString = new URLSearchParams(params).toString();
    return queryString ? `?${queryString}` : '';
};
export const axiosRequest = (method_1, url_1, ...args_1) => __awaiter(void 0, [method_1, url_1, ...args_1], void 0, function* (method, url, data = {}, headers = {}, params = {}) {
    const token = getToken();
    const queryString = buildQueryString(params);
    const config = {
        method,
        url: `${API_DOMAIN}${url}${queryString}`,
        headers: Object.assign({ 'Content-Type': 'application/json', Authorization: token }, headers),
        data,
    };
    try {
        const response = yield axios(config);
        return response.data;
    }
    catch (error) {
        console.error(`Error during ${method} request to ${url}:`, error);
        throw error; // Throw error to be handled by the calling function
    }
});

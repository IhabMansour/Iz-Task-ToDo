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
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { API_DOMAIN } from '../Constants/SharedConstants';
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
        const token = localStorage.getItem('token');
        try {
            const response = yield axios.get(`${API_DOMAIN}/user`, {
                headers: { Authorization: token },
            });
            setUser(response.data);
        }
        catch (error) {
            console.error('Error fetching user:', error);
            logout();
        }
    });
    const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios.post(`${API_DOMAIN}/auth/login`, { email, password }, { headers: { 'Content-Type': 'application/json' } });
            const data = response.data;
            localStorage.setItem('token', data.token);
            setToken(data.token);
            yield fetchUser();
        }
        catch (error) {
            console.error('Login error:', error);
        }
    });
    const updateUser = (name, password) => __awaiter(void 0, void 0, void 0, function* () {
        const bodyObject = {};
        if (name) {
            bodyObject.name = name;
        }
        else if (password) {
            bodyObject.password = password;
        }
        try {
            yield axios.patch(`${API_DOMAIN}/user/${user === null || user === void 0 ? void 0 : user.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', Authorization: token },
                body: JSON.stringify(bodyObject),
            });
            alert('Profile updated successfully');
        }
        catch (error) {
            console.error('Error updating profile:', error);
        }
    });
    const register = (email, password, name) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios.post(`${API_DOMAIN}/auth/register`, { email, password, user: { name } }, { headers: { 'Content-Type': 'application/json' } });
            const data = response.data;
            localStorage.setItem('token', data.token);
            setToken(data.token);
            yield fetchUser();
        }
        catch (error) {
            console.error('Registration error:', error);
        }
    });
    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setUser(undefined);
    };
    useEffect(() => {
        if (token) {
            fetchUser();
        }
    }, [token]);
    return (_jsx(AuthContext.Provider, { value: { user, token, login, register, updateUser, logout }, children: children }));
};
export const useAuth = () => React.useContext(AuthContext);

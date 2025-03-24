import React, { createContext, useState, useEffect, FC } from 'react';
import axios from 'axios';
import { ReactNode } from 'react';
import { API_DOMAIN } from '../Constants/SharedConstants';
import { UserInterface } from '../Interfaces';

interface AuthContextProps {
  user?: UserInterface;
  token?: string;
  login: (email: string, password: string) => void;
  register: (email: string, password: string, name: string) => void;
  updateUser: (name?: string, password?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as any);

interface AuthProviderProps {
  children?: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserInterface>();
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const fetchUser = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${API_DOMAIN}/user`, {
        headers: { Authorization: token },
      });

      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
      logout();
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${API_DOMAIN}/auth/login`,
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const data = response.data;
      localStorage.setItem('token', data.token);
      setToken(data.token);
      await fetchUser();
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const updateUser = async (name?: string, password?: string) => {
    const bodyObject: { name?: string; password?: string } = {};

    if (name) {
      bodyObject.name = name;
    } else if (password) {
      bodyObject.password = password;
    }

    try {
      await axios.patch(`${API_DOMAIN}/user/${user?.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: token },
        body: JSON.stringify(bodyObject),
      });
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      const response = await axios.post(
        `${API_DOMAIN}/auth/register`,
        { email, password, user: { name } },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const data = response.data;
      localStorage.setItem('token', data.token);
      setToken(data.token);
      await fetchUser();
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

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

  return (
    <AuthContext.Provider
      value={{ user, token, login, register, updateUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

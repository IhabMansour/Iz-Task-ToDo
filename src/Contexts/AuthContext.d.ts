import { FC } from 'react';
import { ReactNode } from 'react';
import { UserInterface } from '../Interfaces';
interface AuthContextProps {
    user?: UserInterface;
    token?: string;
    login: (email: string, password: string) => void;
    register: (email: string, password: string, name: string) => void;
    updateUser: (name?: string, password?: string) => void;
    logout: () => void;
}
interface AuthProviderProps {
    children?: ReactNode;
}
export declare const AuthProvider: FC<AuthProviderProps>;
export declare const useAuth: () => AuthContextProps;
export {};

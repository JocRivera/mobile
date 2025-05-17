import React, { createContext, useContext, useEffect, useState } from 'react';
import { authService } from '../services/AuthService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authContext = createContext(null);
export const useAuth = () => useContext(authContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(null);

    const login = async (email, password) => {
        try {
            setError(null);
            const response = await authService.login(email, password);
            setUser(response.user); // guarda usuario completo
            setIsAuthenticated(true);
            await AsyncStorage.setItem('user', JSON.stringify(response.user)); // guarda usuario
        } catch (error) {
            setError('Login failed');
            throw error;
        }
    };

    useEffect(() => {
        const checkUser = async () => {
            try {
                const userString = await AsyncStorage.getItem('user');
                if (userString) {
                    setUser(JSON.parse(userString));
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        checkUser();
    }, []);

    const logout = async () => {
        try {
            await authService.logout();
            setUser(null);
            setIsAuthenticated(false);
            await AsyncStorage.removeItem('user'); // corregido aquí
        } catch (error) {
            setError('Logout failed');
            throw error;
        }
    };

    return (
        <authContext.Provider value={{ user, loading, login, logout, isAuthenticated, error }}>
            {children}
        </authContext.Provider>
    );
};

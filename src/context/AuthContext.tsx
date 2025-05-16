import React, { createContext, useContext, useEffect, useState } from 'react';
import { authService } from '../services/AuthService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const authContext = createContext(null);
export const useAuth = () => useContext(authContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const checkToken = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                if (token) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    setUser({ token });
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Error checking token', error);
            } finally {
                setLoading(false);
            }
        };
        checkToken();
    }, []);

    const login = async (email, password) => {
        try {
            setError(null);
            const response = await authService.login(email, password);
            setUser(response.data);
            setIsAuthenticated(true);
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            await AsyncStorage.setItem('userToken', response.data.token);
        } catch (error) {
            setError('Login failed');
            throw error;
        }
    };

    const register = async (email, password) => {
        try {
            setError(null);
            const response = await authService.register(email, password);
            setUser(response.data);
            setIsAuthenticated(true);
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            await AsyncStorage.setItem('userToken', response.data.token);
        } catch (error) {
            setError('Registration failed');
            throw error;
        }
    };

    const logout = async () => {
        try {
            await authService.logout();
            setUser(null);
            setIsAuthenticated(false);
            delete axios.defaults.headers.common['Authorization'];
            await AsyncStorage.removeItem('userToken');
        } catch (error) {
            setError('Logout failed');
            throw error;
        }
    };

    return (
        <authContext.Provider value={{ user, loading, login, register, logout, isAuthenticated, error }}>
            {children}
        </authContext.Provider>
    );
};

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:3000';
class AuthService {
    async login(email: string, password: string) {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, { email, password });
            console.log('Login response:', response.data);
            return response.data;
        } catch (error) {
            throw new Error('Login failed');
        }
    }

    async register(email: string, password: string) {
        try {
            const response = await axios.post(`${API_URL}/register`, { email, password });
            return response.data;
        } catch (error) {
            throw new Error('Registration failed');
        }
    }

    async logout() {
        try {
            await AsyncStorage.removeItem('userToken');
        } catch (error) {
            throw new Error('Logout failed');
        }
    }
}
const authService = new AuthService();
export { authService };
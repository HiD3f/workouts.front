import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchExercises = async () => {
    try {
        const response = await axios.get(`${API_URL}/exercises`);
        return response.data;
    } catch (error) {
        console.error('An error occurred while fetching the exercises:', error);
        throw error;
    }
};

export const fetchMuscles = async () => {
    try {
        const response = await axios.get(`${API_URL}/muscles`);
        return response.data;
    } catch (error) {
        console.error('An error occurred while fetching the muscles:', error);
        throw error;
    }
};
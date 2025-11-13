import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getTasks = async () => {
    try {
        const response = await api.get('/tasks');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
        throw error;
    }
};

export const createTask = async (taskData) => {
    try {
        const response = await api.post('/tasks', taskData);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar tarefa:', error);
        throw error;
    }
};

export const updateTask = async (id, taskData) => {
    try {
        const response = await api.put(`/tasks/${id}`, taskData);
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar tarefa:', error);
        throw error;
    }
};

export const deleteTask = async (id) => {
    try {
        await api.delete(`/tasks/${id}`);
    } catch (error) {
        console.error('Erro ao deletar tarefa:', error);
        throw error;
    }
};

export default api;

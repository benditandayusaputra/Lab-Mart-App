import axios from 'axios';

const api = axios.create({
  baseURL: 'http://https://lab-mart-api.vercel.app/api:5000/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
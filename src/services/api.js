import axios from 'axios';

// Access the environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // You can add other default configurations here
});

export default api;

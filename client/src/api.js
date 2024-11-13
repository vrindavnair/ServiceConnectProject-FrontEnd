// src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/auth', // Adjust baseURL to match your backend
    headers: { 'Content-Type': 'application/json' }
});

export default api;


import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;

export const client = axios.create({
    baseURL:apiUrl,
    timeout: 5000,
    headers:{
        'Accept':'application/json'
    }
})
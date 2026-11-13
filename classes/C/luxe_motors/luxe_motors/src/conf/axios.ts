import axios from 'axios';

export const client = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 1500,
    headers: {
        'Accept':'application/json'
    } 
});

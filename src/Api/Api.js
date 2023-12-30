import axios from 'axios';

const apiUrl = 'http://localhost:4000/stocks';

export function getStocks() {
    return axios.get(apiUrl);
} 


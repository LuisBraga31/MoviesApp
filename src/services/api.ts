import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.REACT_APIKEY,
        language: "pt-BR",
        include_adult: false,
    }
})
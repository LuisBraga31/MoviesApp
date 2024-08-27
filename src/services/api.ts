import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: "ec305980c09d27f5d244c4f64ea6244b",
        language: "pt-BR",
        include_adult: false,
    }
})
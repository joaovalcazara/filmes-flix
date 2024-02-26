
import axios from 'axios';
//Base da api https://api.themoviedb.org/3/
//URL DA API https://api.themoviedb.org/3/movie/now_playing?api_key=1e23505f113fcccbdc9a8fd506bd7a19

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;



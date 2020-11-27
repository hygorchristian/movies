import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.themoviedb.org/3'
    });
  }

  get = (url) => this.api.get(url, { params: { api_key: process.env.REACT_APP_DBMOVIE_API_KEY } })

  getAllMovies = () => this.get('/list/7065818');

  getAllShows = () => this.get('/list/7065862');

  getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;
}

export default new Api();
import axios from 'axios';

const endpoints = {
  config: 'configurations',
  allMovies: 'list/7065818',
  favMovies: 'list/7066884',
  allShows: 'list/7065862',
  favShows: 'list/7066978',
  genres: 'genre/movie/list',
};

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.themoviedb.org/3'
    });
  }

  get = (url) => this.api.get(url, { params: { api_key: process.env.REACT_APP_DBMOVIE_API_KEY } })

  getConfig = () => this.get(endpoints.config);

  getAllMovies = () => this.get(endpoints.allMovies);

  getAllShows = () => this.get(endpoints.allShows);

  getFavMovies = async () => {
    const response = await this.get(endpoints.favMovies);
    return response?.data?.items;
  };

  getFavShows = async () => {
    const response = await this.get(endpoints.favShows);
    return response?.data?.items;
  };

  getAllGenres = () => this.get(endpoints.genres);

  getImage = (path) => `https://image.tmdb.org/t/p/w500${path}`;

  getBackdropImage = (path) => `https://image.tmdb.org/t/p/w1280${path}`
}

export default new Api();

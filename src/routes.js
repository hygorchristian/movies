import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Movies from '~/screens/Movies';
import Shows from '~/screens/Shows';
import FavoriteMovies from '~/screens/FavoriteMovies';
import FavoriteShows from '~/screens/FavoriteShows';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Movies} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/favorites" exact component={FavoriteMovies} />
        <Route path="/shows" exact component={Shows} />
        <Route path="/shows/favorites" exact component={FavoriteShows} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

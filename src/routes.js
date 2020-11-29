import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Movies from '~/screens/Movies';
import Shows from '~/screens/Shows';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Movies} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/shows" exact component={Shows} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

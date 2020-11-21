import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from '~/screens/Main';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

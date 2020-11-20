import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '~/screens/AppHolder';
import Site from '~/screens/Site';

function Routes() {
  return (
      <Main>
        <Switch>
          <Route path="/" exact component={Site} />
        </Switch>
      </Main>

  );
}

export default Routes;

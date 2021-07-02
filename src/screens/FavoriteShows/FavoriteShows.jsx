import React, { useEffect, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector } from 'react-redux';

import MovieItem from '~/components/MovieItem';

import { Content } from './styles';
import Main from '~/screens/Main/Main';

import favShows from '~/assets/data/bestShows.json';

function Movies() {
  return (
    <Main>
      <Content>
        <main>
          <div className="grid">
            { favShows.map((movie) => (
              <MovieItem key={movie.id} data={movie} />
            )) }
          </div>
        </main>
      </Content>
    </Main>
  );
}

export default Movies;

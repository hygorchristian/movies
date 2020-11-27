import React, { useEffect, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';

import MovieItem from '~/components/MovieItem';

import { Content } from './styles';

function Movies() {
  const { movies } = useSelector((state) => state.favourites);

  return (
    <Content>
      <main>
        <div className="filter">
          <h2>Choose a category</h2>
          <FormControl variant="filled">
            <InputLabel id="demo-simple-select-label">Categories</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              onChange={(value) => null}
            >
              <MenuItem value="movies">Movies</MenuItem>
              <MenuItem value="shows">TV Shows</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="grid">
          { movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          )) }
        </div>
      </main>
    </Content>
  );
}

export default Movies;

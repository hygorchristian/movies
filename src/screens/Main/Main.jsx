import React, { useEffect, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';

import MovieItem from '~/components/MovieItem';
import Header from '~/components/Header';

import { Container, Content } from './styles';
import { FavoritesActions } from '~/store/ducks/favourites';

function Main() {
  const { movies, loading } = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FavoritesActions.loadMoviesRequest());
  }, []);

  return (
    <Container>
      <Header loading={loading} />
      <Content>
        <main>
          <div className="filter">
            <h2>Choose a category</h2>
            <FormControl variant="filled">
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={20}
                onChange={() => null}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
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
    </Container>
  );
}

export default Main;

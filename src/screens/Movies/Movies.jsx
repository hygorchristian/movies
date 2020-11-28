import React, { useEffect, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';

import MovieItem from '~/components/MovieItem';

import { Content } from './styles';

function Movies() {
  const [selected, setSelected] = useState(0);
  const [filtered, setFiltered] = useState([]);

  const { movies, movieGenres } = useSelector((state) => state.favourites);

  useEffect(() => {
    if (selected === 0) {
      setFiltered(movies);
    } else {
      const _filtered = movies.filter((movie) => movie.genre_ids?.includes(selected));
      setFiltered(_filtered);
    }
  }, [movies, selected]);

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
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <MenuItem value={0}>All</MenuItem>

              {movieGenres.map((genre) => (
                <MenuItem key={genre.id} value={genre.id}>{ genre.name }</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="grid">
          { filtered.map((movie) => (
            <MovieItem key={movie.id} data={movie} />
          )) }
        </div>
      </main>
    </Content>
  );
}

export default Movies;

import React, { useEffect, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector } from 'react-redux';

import { Content } from './styles';
import ShowItem from '~/components/ShowItem';

function Shows() {
  const [selected, setSelected] = useState(0);
  const [filtered, setFiltered] = useState([]);

  const { tvShows, showGenres } = useSelector((state) => state.favourites);

  useEffect(() => {
    if (selected === 0) {
      setFiltered(tvShows);
    } else {
      const _filtered = tvShows.filter((movie) => movie.genre_ids?.includes(selected));
      setFiltered(_filtered);
    }
  }, [tvShows, selected]);

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
              {showGenres.map((genre) => (
                <MenuItem key={genre.id} value={genre.id}>{ genre.name }</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="grid">
          { filtered.map((movie) => (
            <ShowItem key={movie.id} data={movie} />
          )) }
        </div>
      </main>
    </Content>
  );
}

export default Shows;

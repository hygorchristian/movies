import React, { useEffect, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import Header from '~/components/Header';
import Movies from '~/screens/Movies';
import Shows from '~/screens/Shows';

import { Container } from './styles';
import { FavoritesActions } from '~/store/ducks/favourites';

const pages = {
  movies: <Movies />,
  shows: <Shows />,
};

function Main() {
  const [selected, setSelected] = useState('movies');

  const { loading } = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FavoritesActions.loadMoviesRequest());
    dispatch(FavoritesActions.loadShowsRequest());
  }, []);

  return (
    <Container>
      <Header loading={loading} />
      <div className="options">
        <button onClick={() => setSelected('movies')} className={selected === 'movies' && 'selected'}>Movies</button>
        <button onClick={() => setSelected('shows')} className={selected === 'shows' && 'selected'}>TV Shows</button>
      </div>
      { pages[selected] }
    </Container>
  );
}

export default memo(Main);

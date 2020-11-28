import React, { useEffect, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Drawer from '@material-ui/core/Drawer';
import Header from '~/components/Header';
import Detail from '~/components/Detail';
import Movies from '~/screens/Movies';
import Shows from '~/screens/Shows';

import { Container } from './styles';
import { FavoritesActions } from '~/store/ducks/favourites';
import { DetailActions } from '~/store/ducks/detail';

const pages = {
  movies: <Movies />,
  shows: <Shows />,
};

function Main() {
  const [selected, setSelected] = useState('movies');

  const { loading } = useSelector((state) => state.favourites);
  const { visible } = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  const closeDetail = () => {
    dispatch(DetailActions.setDetailVisible(false));
  };

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
      <Drawer anchor="right" open={visible} onClose={closeDetail}>
        <Detail />
      </Drawer>
    </Container>
  );
}

export default memo(Main);

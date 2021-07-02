import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Container, Content, Progress } from './styles';
import { FavoritesActions } from '~/store/ducks/favourites';

const navItems = [
  {
    name: 'movies',
    label: 'Movies',
    path: '/movies'
  },
  {
    name: 'fav-movies',
    label: 'Fav Movies',
    path: '/movies/favorites'
  },
  {
    name: 'shows',
    label: 'TV Shows',
    path: '/shows'
  },
  {
    name: 'fav-shows',
    label: 'Fav Shows',
    path: '/shows/favorites'
  },
];

function Header({ loading }) {
  const { selected } = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  const setSelected = (value) => {
    dispatch(FavoritesActions.setSelected(value));
  };

  return (
    <Container>
      <Content>
        <h2>My favorite movies</h2>
        <nav>
          {navItems.map((item) => (
            <a onClick={() => setSelected(item.name)} className={selected === item.name ? 'selected' : ''} href={item.path}>{ item.label }</a>
          ))}
        </nav>
      </Content>
      {loading && <Progress />}
    </Container>
);
}

export default Header;

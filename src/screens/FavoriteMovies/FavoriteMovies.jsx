import React from 'react';
import { useQuery } from 'react-query';
import MovieItem from '~/components/MovieItem';
import Main from '~/screens/Main/Main';
import Api from '../../services/Api';
import { Content } from './styles';

function FavoriteMovies() {
  const { data } = useQuery('fav-movies', Api.getFavMovies);
  return (
    <Main>
      <Content>
        <main>
          <div className="grid">
            { data?.map((movie) => (
              <MovieItem key={movie.id} data={movie} />
            )) }
          </div>
        </main>
      </Content>
    </Main>
  );
}

export default FavoriteMovies;

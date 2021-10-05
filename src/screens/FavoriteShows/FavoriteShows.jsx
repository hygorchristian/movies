import React from 'react';
import { useQuery } from 'react-query';
import MovieItem from '~/components/MovieItem';
import Main from '~/screens/Main/Main';
import Api from '~/services/Api';
import { Content } from './styles';

function FavoriteShows() {
  const { data } = useQuery('fav-shows', Api.getFavShows);
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

export default FavoriteShows;

import React, { useEffect, useRef, useState } from 'react';
import Rate from '~/components/Rate';
import useWindow from '~/hooks/useWindow';
import Api from '~/services/Api';

import { Container } from './styles';

const aspectRatio = 1.5;

function MovieItem({ movie }) {
  const ref = useRef();
  const [width, setWidth] = useState(0);
  const { windowWidth } = useWindow();

  useEffect(() => {
    setWidth(ref.current?.offsetWidth);
  }, [ref.current, windowWidth]);

  return (
    <Container>
      <div ref={ref} className="cover">
        <img className="cover" src={Api.getImage(movie.poster_path)} style={{ height: width * aspectRatio }} />
        <Rate value={movie.vote_average * 10} />
      </div>
      <h3 className="title">{ movie.title }</h3>
    </Container>
  );
}

export default MovieItem;

import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import Api from '~/services/Api';
import { Container } from './styles';
import Rate from '~/components/Rate';

function Detail() {
  const { current } = useSelector((state) => state.detail);

  const getBg = (url) => `linear-gradient(0deg, rgba(18,31,41,0.5), rgba(18,31,41,0.8)), url(${url})`;
  const title = current.media_type === 'movie' ? current.title : current.original_name;
  const date = current.media_type === 'movie' ? current.release_date : current.first_air_date;
  const year = `(${date.substr(0, 4)})`;

  return (
    <Container>
      <div className="cover" style={{ backgroundImage: getBg(Api.getBackdropImage(current.backdrop_path)) }}>
        <img src={Api.getImage(current.poster_path)} />
        <div className="info">
          <div className="title-line">
            <h2>{title}</h2>
            <span className="year">
              {year}
            </span>
          </div>
          <span className="genres">Action, Fiction, Horror</span>
          <Rate size={50} value={current.vote_average * 10} />
          <span className="overview">{current.overview}</span>
        </div>
      </div>
    </Container>
);
}

export default memo(Detail);

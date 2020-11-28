import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import useWindow from '~/hooks/useWindow';
import Api from '~/services/Api';

import { Container, Rate } from './styles';
import { DetailActions } from '~/store/ducks/detail';

const aspectRatio = 1.5;

function ShowItem({ data }) {
  const ref = useRef();
  const [width, setWidth] = useState(0);
  const { windowWidth } = useWindow();
  const dispatch = useDispatch();

  const openDetail = () => {
    dispatch(DetailActions.setCurrent(data));
    dispatch(DetailActions.setDetailVisible(true));
  };

  useEffect(() => {
    setWidth(ref.current?.offsetWidth);
  }, [ref.current, windowWidth]);

  return (
    <Container onClick={openDetail}>
      <div ref={ref} className="cover">
        <img className="cover" src={Api.getImage(data.poster_path)} style={{ height: width * aspectRatio }} />
        <Rate size={40} value={data.vote_average * 10} />
      </div>
      <h3 className="title">{ data.original_name }</h3>
    </Container>
  );
}

export default ShowItem;

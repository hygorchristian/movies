import styled from 'styled-components';
import RateBase from '~/components/Rate';

export const Container = styled.div`
  width: 100%;
  transition: all 150ms ease-in-out;
  cursor: pointer;

  &:hover{
    transform: scale(1.05);
  }

  .cover{
    width: 100%;
    position: relative;

    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center center;
      border-radius: 5px;
    }
  }

  .title{
    font-size: 20px;
    margin-top: 26px;
    color: rgba(255,255,255,0.85);
  }
`;

export const Rate = styled(RateBase)`
  position: absolute;
  bottom: -20px;
  left: 5px;
`;

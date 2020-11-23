import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Container = styled.div`
  height: 40px;
  width: 40px;
  position: absolute;
  bottom: -20px;
  left: 5px;
  border-radius: 50%;
  background-color: rgb(3,37,65);
  display: flex;
  align-items: center;
  justify-content: center;

  .value{
    font-size: 16px;
    font-weight: 600;
  }
`;

export const Progress = styled(CircularProgress).attrs({
  variant: 'static'
})`
  position: absolute;
  color: #00c976 !important;
  height: 36px !important;
  width: 36px !important;
`;

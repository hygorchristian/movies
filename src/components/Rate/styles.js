import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Container = styled.div`
  height: ${({ size }) => size - 4}px;
  width: ${({ size }) => size - 4}px;
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
  height: ${({ size }) => size - 4}px !important;
  width: ${({ size }) => size - 4}px !important;
`;

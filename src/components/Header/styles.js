import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';

export const Container = styled.header`
  height: 56px;
  width: 100%;
  background: rgba(12,21,29,.8);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Progress = styled(LinearProgress).attrs()`
  width: 100%;
  background-color: #272727 !important;

  .MuiLinearProgress-barColorPrimary{
    background-color: #494949 !important;
  }
`;

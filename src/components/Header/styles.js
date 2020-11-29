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
  justify-content: space-between;

  nav{
    display: flex;
    height: 100%;
    align-items: center;

    a{
      margin-left: 20px;
      color: rgba(255,255,255,0.73);
      text-decoration: none;
      text-transform: uppercase;

      &.selected{
        font-weight: 600;
        color: #2ed460;
      }
    }

  }
`;

export const Progress = styled(LinearProgress).attrs()`
  width: 100%;
  background-color: #272727 !important;

  .MuiLinearProgress-barColorPrimary{
    background-color: #494949 !important;
  }
`;

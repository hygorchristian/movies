import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px 100px;

  .options{
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 20px;

    button{
      outline: none;
      border: none;
      height: 48px;
      margin: 0 10px;
      border-radius: 10px;
      width: 250px;
      background-color: #14323e;
      font-size: 14px;
      color: white;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1.11px;
      cursor: pointer;

      &:hover{
        transform: scale(1.02);
      background-color: #153b48;
      }

      &:active{
        transform: scale(0.99);
      }

      &.selected{
        background-color: #228a45;
      }

      &.selected:hover{
        background-color: #219956;
      }

    }
  }
`;

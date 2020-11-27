import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  main {
    width: 1000px;
    display: flex;
    flex-direction: column;
    padding-top: 60px;

    .filter{
      width: 100%;
      display: flex;
      flex-direction: column;

      h2{
        margin-right: 40px;
        margin-bottom: 20px;
        font-size: 20px;
      }
    }

    .grid{
      width: 100%;
      display: grid;
      grid-row-gap: 30px;
      grid-column-gap: 30px;
      grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );;
      padding-top: 60px;

      .item{
        width: 100%;
        height: 350px;
        background-color: white;
        border-radius: 10px;
        transition: all 150ms ease-in-out;
        cursor: pointer;

        &:hover{
          transform: scale(1.05);
        }
      }
    }
  }

`;

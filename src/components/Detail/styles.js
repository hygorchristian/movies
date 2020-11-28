import styled from 'styled-components';

export const Container = styled.div`
  width: 75vw;
  height: 100vh;
  background: #11262f;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .cover{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 35px;
    background-position: right top;
    background-size: cover;

    img{
      height: 500px;
      object-fit: cover;
      object-position: right;
      border-radius: 10px;
      background-position: rgba(18,31,41,0.51);
      margin-right: 35px;
    }

    .info{
      display: flex;
      flex-direction: column;
      padding: 30px 0px;

      .title-line{
        display: flex;
        flex-direction: row;

        h2{
          font-size: 36px;
          letter-spacing: 1.5px;
        }

        .year{
          font-size: 36px;
          color: rgba(255,255,255,0.7);
          margin-left: 12px;
        }
      }

      .genres{
        margin-bottom: 20px;
      }

      .overview{
        font-size: 20px;
        line-height: 24px;
        font-weight: 200px;
        color: #e3e3e3;
        margin-top: 30px;
      }

    }
  }
`;

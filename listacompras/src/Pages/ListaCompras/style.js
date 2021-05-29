import styled from "styled-components";

export const MyDiv = styled.div`
  height: 108%;
  width: 97%;
  display: flex;
  align-items: center;
  margin-top: -50px;
  justify-content: space-around;
  flex-direction: column;

  .lista {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .item {

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .duplica {
    margin-left: -5%;
    width: 106%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .valorTotal {
    display: flex;
    align-items: center;
    width: 80%;
    justify-content: space-between;
    border-bottom: 1pt rgba(100, 90, 90, 0.3) solid;
  }

  .valorTotal > button {
      margin-top: -10px;
  }

  .addNew {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 30%;
    padding-top: 10px;
    margin-left: -50%;
  }

  .addNew > h5 {
    margin-left: 10px;
  }

  .addNew:hover {
    color: blue;
  }

  .remover{
      margin-top: 20px;
      margin-left: -50%;
      display: flex;

  }

  .remover > button {
      margin-left: 10%;
  }

  .chk{
      background-color: blue;
      width: 5%;
      cursor: pointer;
      display: none;
  }

  @media(max-width: 760px)
  {
    .valorTotal{
      width: 85%;
    }
    .valorTotal > h3 {
      font-size: 1.5rem;
    }


  }

  @media(max-width: 970px)
  {
    .addNew {
      width: 80%;
      margin-left: 0px;
    }
     .addNew > h5 {
      font-size: 1.5rem;
    }
  }

  @media(max-width: 600px)
  {
      .addNew {
      width: 80%;
    }
    .addNew > h5 {
      font-size: 1.2rem;
      margin-top: 3px;
    }
  }
`;

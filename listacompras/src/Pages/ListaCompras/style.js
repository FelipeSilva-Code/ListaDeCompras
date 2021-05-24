import styled from "styled-components";

export const MyDiv = styled.div`
  height: 108%;
  width: 97%;
  display: flex;
  align-items: flex-start;
  margin-top: -50px;
  justify-content: space-around;

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
    padding-top: 5px;
    width: 80%;
    justify-content: space-between;
  }

  .valorTotal > button {
      margin-top: -10px;
  }

  .addNew {
    display: flex;
    align-items: center;
    cursor: pointer;
    border-top: 1pt rgba(100, 90, 90, 0.3) solid;
    width: 80%;
    padding-top: 10px;
  }

  .addNew > h5 {
    margin-left: 10px;
  }

  .addNew:hover {
    color: blue;
  }
`;

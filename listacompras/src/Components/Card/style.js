import styled from "styled-components";

export const MyCard = styled.div`
  min-height: 40vh;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1pt rgba(100, 90, 90, 0.2) solid;
  flex-direction: column;
  margin-top: 10px;
  box-shadow: 1px 1px 10px #c7c4c4;

  .nomeCompra {
    width: 80%;
    margin-bottom: 10px;
  }

  @media (max-width: 1280px) {
    width: 80%;
  }
  @media (max-width: 800px) {
    width: 100%;
    border: 0px;
    box-shadow: none;
  }
`;

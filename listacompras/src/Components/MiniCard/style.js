import styled from "styled-components";

export const MyMiniCard = styled.div`
  min-height: 30%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;

  border-bottom: 1pt #c7c4c4 solid;
  border-top: 1pt #c7c4c4 solid;

  .nome {
    width: 50%;
  }

  .valor {
    width: 20%;
  }

  .quantidade {
    width: 15%;
  }
`;

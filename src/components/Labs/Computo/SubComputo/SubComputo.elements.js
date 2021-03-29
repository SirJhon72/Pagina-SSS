import styled from "styled-components";
import { GlobalContainer, GlobalWrapper } from "../../Global/Global";

export const GlobalContainerComputo = styled(GlobalContainer)``;

export const SubComputoWrapper = styled(GlobalWrapper)``;

export const LeyendComputoTitle = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #003c5e;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;

  h1 {
    width: 100%;
    text-align: center;
    font-size: 2rem;
  }

  p {
    margin: auto;
    width: 60%;
    text-align: justify;
  }

  @media screen and (max-width: 720px) {
    p {
      width: 85%;
    }
  }
`;

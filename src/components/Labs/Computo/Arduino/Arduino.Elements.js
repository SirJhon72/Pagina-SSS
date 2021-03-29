import styled from "styled-components";
import { GlobalContainer, GlobalWrapper } from "../../Global/Global";

export const GlobalArduinoContainer = styled(GlobalContainer)``;

export const GlobalArduinoWrapper = styled(GlobalWrapper)``;

export const LeyendArduinoTitle = styled.div`
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

export const ImagenWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  img {
    width: 50%;
  }
`;

export const PracticasContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

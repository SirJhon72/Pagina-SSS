import styled from "styled-components";
import { GlobalContainer, GlobalWrapper } from "../Global/Global";

export const GaleriaContainer = styled(GlobalContainer)``;

export const GaleriaWrapper = styled(GlobalWrapper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CurrentPhoto = styled.div`
  margin-top: 2rem;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

export const Carrusel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;

  img {
    width: 15%;
    padding: 0.5rem;
    cursor: pointer;
  }

  @media screen and (max-width: 720px) {
    width: 80%;
    img {
      padding: 0.2rem;
      width: 25%;
    }
  }
`;

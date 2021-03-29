import styled from "styled-components";
import { GlobalContainer, GlobalWrapper } from "../../Global/Global";

export const SubInglesContainer = styled(GlobalContainer)``;

export const SubInglesWrapper = styled(GlobalWrapper)``;

export const LeyendInglesTitle = styled.div`
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

export const EjerciciciosIngles = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }

  @media screen and (max-width: 720px) {
    display: flex;
    justify-content: center;
  }
`;

export const LeyendImage = styled.div`
  margin-top: 1rem;
  width: 80%;
  display: flex;
  justify-content: center;
  background-color: #003c5e;
  border-left: 5px solid #41c6f3;
  border-right: 5px solid #41c6f3;
  color: white;
  text-align: justify;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1rem;
  padding: 1rem;

  /* @media screen and (max-width: 1200px){
    width: 
  } */
`;

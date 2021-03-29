import styled from "styled-components";

export const LabGeneralContainer = styled.div`
  width: 100%;
  background-color: #fff;
  margin-top: 2rem;
`;

export const LabWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TitleSecction = styled.h1`
  color: #003c5e;
  width: 100%;
  text-align: center;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    color: #003c5e;
  }
  &:nth-of-type(2) {
    font-size: 1.5rem;
  }
`;

export const ColumSecction = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const InfoSeccion = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  text-align: justify;
  color: #003c5e;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  flex-direction: column;

  h1 {
    width: 100%;
    text-align: left;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const CurrentCarrusel = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;

  img {
    width: 80%;
  }

  @media screen and (max-width: 960px) {
    margin-top: 1rem;
    width: 100%;
    img {
      width: 90%;
    }
  }
`;

export const CarruselImages = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin: 0 1rem;
    width: 100px;
    cursor: pointer;
  }

  @media screen and (max-width: 960px) {
    flex-wrap: wrap;

    img {
      margin: 0.5rem 0.5rem;
    }
  }
`;

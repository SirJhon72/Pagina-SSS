import styled from "styled-components";

export const InfoGeneralContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export const InfoWraper = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;

  @media screen and (max-width: 12000px) {
    justify-content: center;
  }
`;

export const Ruta = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 100%auto;
  align-items: center;

  a {
    text-decoration: none;
    color: #003c5e;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 16px;
    font-weight: 400;
    padding: 0 0.5rem;
  }

  @media screen and (max-width: 960px) {
    justify-content: center;
  }
`;

export const Banner = styled.div`
  width: 60%;
  background-color: #e0e0e0;
  padding: 1rem 1rem;
  border-left: 5px solid #00c9f0;
  border-right: 5px solid #00c9f0;
  text-align: center;

  h2 {
    font-family: "Source Sans Pro", sans-serif;
    color: #003c5e;
  }

  @media screen and (max-width: 960px) {
    width: 95%;
  }
`;

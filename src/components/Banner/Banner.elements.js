import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  border: 1px soldi red;
  margin-bottom: 1rem;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 505px;
  max-width: 1300px;
  margin: auto;
  background: url(${({ bgc }) => bgc});
  background-image: cover;
  background-position: center, center;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  h6 {
    width: 100%;
    text-align: center;
    color: white;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
  }

  h1 {
    width: 100%;
    text-align: center;
    color: white;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 4rem;
    font-weight: 400;
  }

  @media screen and (max-width: 960px) {
    h6 {
      font-size: 1.2rem;
    }

    h1 {
      font-size: 3rem;
    }
  }
`;

export const BannerLeyend = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

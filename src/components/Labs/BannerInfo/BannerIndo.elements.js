import styled from "styled-components";
import { GlobalContainer, GlobalWrapper } from "../Global/Global";
import { Link } from "react-router-dom";

export const GlobalBannerInfoContainer = styled(GlobalContainer)`
  margin-top: 2rem;
`;

export const WrapperBannerInfo = styled(GlobalWrapper)`
  background-color: #f7f7f7;
  box-shadow: 0px 2px 3px 0.2px rgba(0, 0, 0, 0.5);
  flex-direction: ${({ direction }) => (direction ? "row" : "row-reverse")};
  padding: 3rem 2rem;
`;

export const BannerInfoFirstColumns = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  img {
    width: 50%;
  }

  p {
    padding: 1rem;
    width: 100%;
    color: #003c5e;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    text-align: justify;
    font-size: 1rem;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    img {
      width: 40%;
    }

    p {
      width: 80%;
    }
  }
`;

export const BannerInfoSecondColumn = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
  }

  @media screen and (max-width: 960px) {
    margin-top: 1rem;
    width: 100%;

    img {
      width: 80%;
    }
  }
`;

export const ButtonBannerInfo = styled.div`
  width: 50%;
  padding: 0.5rem 2rem;
  background-color: #003c5e;

  text-align: center;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #00b5e2;
    transition: 0.3s all ease-in;
    color: #003c5e;
  }

  @media screen and (max-width: 1200px) {
    width: 60%;
  }

  @media screen and (max-width: 960px) {
    width: 60%;
  }

  @media screen and (max-width: 720px) {
    width: 80%;
  }
`;

export const EnlaceBotton = styled(Link)`
  color: white;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.3rem;
  text-decoration: none;
`;

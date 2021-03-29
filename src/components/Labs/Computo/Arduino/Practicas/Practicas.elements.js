import styled from "styled-components";

export const PracticaContainer = styled.div`
  width: 35%;
  position: relative;
  background: url(${({ bgc }) => bgc});
  background-position: center, center;
  background-size: cover;
  padding: 10rem 4rem;
  border-radius: 10px;
  margin: 1rem;

  @media screen and (max-width: 960px) {
    width: 45%;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const PracticasSubContainer = styled.div`
  transition: 0.3s all ease-in;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 60, 84, 1);
  cursor: pointer;
  border-radius: 10px;

  h1 {
    transition: 0.3s all ease-in;
    color: white;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    padding: 0.5rem 2rem;
    width: 80%;
    text-align: center;
  }

  &:hover {
    background-color: rgba(0, 60, 84, 0.5);
    transition: 0.3s all ease-in;
    box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.4);
    h1 {
      border-bottom: 0.3rem solid white;
      transition: 0.3s all ease-in;
    }
  }

  @media screen and (max-width: 960px) {
    background-color: rgba(0, 60, 84, 0.5);

    h1 {
      width: 80%;
      text-align: center;
    }
  }
`;

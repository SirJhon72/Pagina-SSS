import styled from "styled-components";

export const ContainerColumna = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 720px) {
    display: flex;
    justify-content: center;
    width: 90%;
    padding: 1rem 0;
  }
`;

export const ColumnaItem = styled.div`
  width: 100%;
`;

export const ImageTitle = styled.div`
  width: 100%;
  height: 200px;
  background: url(${({ bgc }) => bgc});
  background-position: 0, 0;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 2rem;
`;

export const EjerciosLista = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
  color: #003c5e;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1rem;

  p {
    padding: 0.8rem 0;
  }
`;

import React from "react";
import {
  ContainerColumna,
  ColumnaItem,
  ImageTitle,
  EjerciosLista,
} from "./Columna.elements";

const Columna = (props) => {
  return (
    <>
      <ContainerColumna>
        <ColumnaItem>
          <ImageTitle bgc={props.bgc}>{props.title}</ImageTitle>
          <EjerciosLista>
            {props.ejercicios.map((item, id) => (
              <p key={id}>{item.name}</p>
            ))}
          </EjerciosLista>
        </ColumnaItem>
      </ContainerColumna>
    </>
  );
};

export default Columna;

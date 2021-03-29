import React from "react";
import { PracticaContainer, PracticasSubContainer } from "./Practicas.elements";

const Practicas = (props) => {
  return (
    <>
      <PracticaContainer bgc={props.bgc}>
        <PracticasSubContainer>
          <h1>{props.title}</h1>
        </PracticasSubContainer>
      </PracticaContainer>
    </>
  );
};

export default Practicas;

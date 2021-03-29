import React from "react";
import {
  Carrusel,
  CurrentPhoto,
  GaleriaContainer,
  GaleriaWrapper,
} from "./Galeria.elements";

const Galeria = (props) => {
  return (
    <>
      <GaleriaContainer>
        <GaleriaWrapper>
          <CurrentPhoto>
            <img src={props.imagenes[0].img} alt={"current"} />
          </CurrentPhoto>
          <Carrusel>
            {props.imagenes.map((item, id) => (
              <img src={item.img} key={id} alt={id} />
            ))}
          </Carrusel>
        </GaleriaWrapper>
      </GaleriaContainer>
    </>
  );
};

export default Galeria;

import React from "react";
import {
  Banner,
  InfoGeneralContainer,
  InfoWraper,
  Ruta,
} from "./InfoHeader.elements";

const InfoHeader = (props) => {
  return (
    <>
      <InfoGeneralContainer>
        <InfoWraper>
          <Ruta>
            <p>
              <a href='./'> Inicio </a>
            </p>
            <p>&gt;</p>
            <p>
              <a href='./'> Instalaciones </a>
            </p>
            <p>&gt;</p>
            <p>
              <a href='./'> Laboratorios </a>
            </p>
            {props.ruta !== undefined ? (
              <p>
                &gt; <a href='./'> {props.ruta}</a>
              </p>
            ) : null}
            {props.ruta2 !== undefined ? (
              <p>
                &gt; <a href='./'> {props.ruta}</a>
              </p>
            ) : null}
          </Ruta>
          <Banner>
            <h2>Preparatoria Lic. Benito Juárez García</h2>
          </Banner>
        </InfoWraper>
      </InfoGeneralContainer>
    </>
  );
};

export default InfoHeader;

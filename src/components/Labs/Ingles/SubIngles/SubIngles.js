import React from "react";
import { Banner, InfoHeader, Galeria } from "../../..";
import bgc from "../../../../Assets/banners/ingles/banner.png";
import Columna from "../../Columna/Columna";
import ColumnasIngles from "../../Columna/ColumnaInfoIngles";
import {
  LeyendInglesTitle,
  SubInglesContainer,
  SubInglesWrapper,
  EjerciciciosIngles,
  LeyendImage,
} from "./SubIngles.elements";

const imagenes = [
  { img: require("../../../../Assets/carrusel/ingles/img1.jpg").default },
  { img: require("../../../../Assets/carrusel/ingles/img2.jpg").default },
  { img: require("../../../../Assets/carrusel/ingles/img3.jpg").default },
  { img: require("../../../../Assets/carrusel/ingles/img4.jpg").default },
  { img: require("../../../../Assets/carrusel/ingles/img5.jpg").default },
];
const SubIngles = () => {
  return (
    <>
      <Banner
        bgc={bgc}
        header={"Would you like a cup of tea?"}
        title={"Fancy a cuppa?"}
      />
      <InfoHeader ruta={"Laboratorio de ingles"} />
      <SubInglesContainer>
        <SubInglesWrapper>
          <LeyendInglesTitle>
            <h1>Laboratorio de Ingles</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
              recusandae nihil temporibus eum, alias ipsum aperiam nobis iste
              ipsam at ab provident, voluptatibus reiciendis dolor officia
              tempore unde quaerat exercitationem?
            </p>
          </LeyendInglesTitle>
          <Galeria imagenes={imagenes} />
          <EjerciciciosIngles>
            {ColumnasIngles.map((item, id) => (
              <Columna
                key={id}
                title={item.type}
                bgc={item.img}
                ejercicios={item.Ejercicios}
              >
                hola
              </Columna>
            ))}
          </EjerciciciosIngles>
          <LeyendImage>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              ab maiores unde ratione cum placeat hic, dolore magnam voluptatum
              reiciendis, iste facilis quisquam nulla nam praesentium assumenda
              ea similique possimus!
            </p>
          </LeyendImage>
        </SubInglesWrapper>
      </SubInglesContainer>
    </>
  );
};

export default SubIngles;

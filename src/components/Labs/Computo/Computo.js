import React from "react";
import {
  CarruselImages,
  ColumSecction,
  CurrentCarrusel,
  InfoSeccion,
  LabGeneralContainer,
  LabWrapper,
  TitleSecction,
} from "./Computo.elements";
import { Link } from "react-router-dom";
import CurrentImagen from "../../../Assets/carrusel/compute/img1.jpg";

const Carrusel = [
  { img: require("../../../Assets/carrusel/compute/img1.jpg").default },
  { img: require("../../../Assets/carrusel/compute/img2.jpg").default },
  { img: require("../../../Assets/carrusel/compute/img3.jpg").default },
  { img: require("../../../Assets/carrusel/compute/img4.jpg").default },
  { img: require("../../../Assets/carrusel/compute/img5.jpg").default },
];

const Computo = () => {
  return (
    <>
      <LabGeneralContainer>
        <LabWrapper>
          <TitleSecction>
            <Link to='/LabComputo'>Laboratorio de Computo</Link>
          </TitleSecction>
          <ColumSecction>
            <InfoSeccion>
              <h1>printf("Hello World");</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              Suspendisse fringilla convallis lobortis. Vestibulum ut iaculis
              quam, a interdum justo. Pellentesque consectetur auctor dui
              tincidunt iaculis. Donec sodales lorem libero, ut gravida neque
              sodales vitae. Proin tincidunt, sapien l acinia venenatis gravida,
              arcu metus euismod augue, sed varius ante turpis vel orci. Etiam
              venenatis convallis metus, sed cursus urna. Ut a posuere orci.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Suspendisse potenti. Vestibulum ut iaculis
              quam, a interdum justo. Pellentesque consectetur auctor dui
              tincidunt iaculis. Donec sodales lorem libero, ut gravida neque
              sodales vitae. Proin tincidunt, sapien l acinia venenatis gravida,
              arcu metus euismod augue, sed varius ante turpis vel orci.
              <br /> <br />
              Donec sodales lorem libero, ut gravida neque sodales vitae. Proin
              tincidunt, sapien l acinia venenatis gravida, arcu metus euismod
              augue, sed varius ante turpis vel orci. Etiam venenatis convallis
              metus, sed cursus urna. Ut a posuere orci. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Suspendisse potenti. Vestibulum ut iaculis quam, a interdum justo.
              Pellentesque consectetur auctor dui tincidunt iaculis.
            </InfoSeccion>
            <CurrentCarrusel>
              <img src={CurrentImagen} alt='' />
            </CurrentCarrusel>
            <CarruselImages>
              {Carrusel.map((item, id) => (
                <img src={item.img} alt={item.img} key={id} />
              ))}
            </CarruselImages>
          </ColumSecction>
          <TitleSecction>
            <Link to='./LabComputo'> Visitar el laboratorio</Link>
          </TitleSecction>
        </LabWrapper>
      </LabGeneralContainer>
    </>
  );
};

export default Computo;

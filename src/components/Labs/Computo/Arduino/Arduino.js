import React from "react";
import {
  GlobalArduinoContainer,
  GlobalArduinoWrapper,
  ImagenWrapper,
  LeyendArduinoTitle,
  PracticasContainer,
} from "./Arduino.Elements";
import Practica from "./Practicas/Practicas";
import { Banner, InfoHeader } from "../../../";
import bgc from "../../../../Assets/banners/arduino/banner.png";
import arduinoImage from "../../../../Assets/banners/arduino/arduino.png";

const practicas = [
  {
    title: "Practicas y Prototipos",
    img: require("../../../../Assets/banners/arduino/img1.jpg").default,
  },
  {
    title: "Manual",
    img: require("../../../../Assets/banners/arduino/img2.jpg").default,
  },
  {
    title: "Solucionario",
    img: require("../../../../Assets/banners/arduino/img3.jpg").default,
  },
];

const Arduino = () => {
  return (
    <>
      <GlobalArduinoContainer>
        <GlobalArduinoWrapper>
          <Banner bgc={bgc} title={"Arduino"} />
          <InfoHeader ruta={"Laboratorio de Computo"} ruta2={"Arduino"} />
          <LeyendArduinoTitle>
            <h1>Arduino + -</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
              recusandae nihil temporibus eum, alias ipsum aperiam nobis iste
              ipsam at ab provident, voluptatibus reiciendis dolor officia
              tempore unde quaerat exercitationem?
            </p>
          </LeyendArduinoTitle>
          <ImagenWrapper>
            <img src={arduinoImage} alt='' />
          </ImagenWrapper>

          <PracticasContainer>
            {practicas.map((item, id) => (
              <Practica key={id} bgc={item.img} title={item.title} />
            ))}
          </PracticasContainer>
        </GlobalArduinoWrapper>
      </GlobalArduinoContainer>
    </>
  );
};

export default Arduino;

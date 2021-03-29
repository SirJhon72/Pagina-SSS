import React from "react";
import {
  GlobalContainerComputo,
  SubComputoWrapper,
  LeyendComputoTitle,
} from "./SubComputo.elements";
import { Banner, InfoHeader, Galeria } from "../../..";
import bgc from "../../../../Assets/banners/computer/banner.png";

import BannerInfo from "../../BannerInfo/BannerInfo";
import logo from "../../../../Assets/banners/computer/logo.png";
import image from "../../../../Assets/banners/computer/arduino.png";
const imagenes = [
  { img: require("../../../../Assets/carrusel/compute/img1.jpg").default },
  { img: require("../../../../Assets/carrusel/compute/img2.jpg").default },
  { img: require("../../../../Assets/carrusel/compute/img3.jpg").default },
  { img: require("../../../../Assets/carrusel/compute/img4.jpg").default },
  { img: require("../../../../Assets/carrusel/compute/img5.jpg").default },
];

const SubComputo = () => {
  return (
    <>
      <GlobalContainerComputo>
        <SubComputoWrapper>
          <Banner
            bgc={bgc}
            header={"printf('Hello world');"}
            title={">>$ Hello World"}
          />
          <InfoHeader ruta={"Laboratorio de computo"} />
          <LeyendComputoTitle>
            <div>
              <h1>Laboratorio de Computo</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
                recusandae nihil temporibus eum, alias ipsum aperiam nobis iste
                ipsam at ab provident, voluptatibus reiciendis dolor officia
                tempore unde quaerat exercitationem?
              </p>
            </div>
          </LeyendComputoTitle>
          <Galeria imagenes={imagenes} />
        </SubComputoWrapper>
      </GlobalContainerComputo>
      <BannerInfo
        logo={logo}
        image={image}
        direction={true}
        textButton={"Aprende Arduino"}
        link={"/Arduino"}
      />
    </>
  );
};

export default SubComputo;

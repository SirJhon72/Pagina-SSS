import React from "react";
import Banner from "../Banner/Banner";
import InfoHeader from "../InfoHeader/InfoHeader";
import Computo from "./Computo/Computo";
import Ingles from "./Ingles/Ingles";
import bgc from "../../Assets/banners/intro/banner.png";

const Principal = () => {
  return (
    <>
      <Banner
        bgc={bgc}
        header={"Conoce los nuevos laboratorios"}
        title={"INGLES & COMPUTO"}
      />
      <InfoHeader />
      <Ingles />
      <Computo />
    </>
  );
};

export default Principal;

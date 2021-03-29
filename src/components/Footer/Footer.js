import React from "react";
import {
  Descriptions,
  FooterContainer,
  FooterWrapper,
} from "./Footer.elements";
import LogoFooter from "../../Assets/icons/footer.png";
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <img src={LogoFooter} alt='' />
          <Descriptions>
            <a href='./'>
              <b>Benemérita Universidad Autónoma de Puebla</b>
              <br />
              4 Sur 104 Centro Histórico <br />
              C.P. 72000 Teléfono +52 (222) 229 55 00
            </a>
          </Descriptions>
          <Descriptions>
            <a href='./'>
              Transparencia y Acceso a la Información <br />
              Obligaciones de Transparencia
              <br />
              PDI 2017 - 2021
              <br />
              Aviso de Privacidad
            </a>
          </Descriptions>
          <Descriptions>
            <a href='./'>
              Preparatoria Lic. Benito Juárez García Boulevard 14 sur y Circuito{" "}
              <br />
              Juan Pablo II, Col.Jardines de San Manuel
              <br />
              <br />
              Teléfono +52 (222) 229 55 00 Ext.2451
            </a>
          </Descriptions>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;

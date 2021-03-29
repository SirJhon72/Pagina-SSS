import React, { useState, useEffect } from "react";
import {
  ContainerMenuGeneral,
  Menu,
  MenuItem,
  MenuItemLink,
  MenuResponsive,
  Wrapper,
  MenuMobilIcon,
  MenuResponsiveItem,
  MenuResponsiveItemLink,
} from "./Navbar.elements";
import LogoBUAP from "../../Assets/icons/logo_buap.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

/* Imagenes */
const ImageneLinks = [
  { img: require("../../Assets/icons/facebook.png").default },
  { img: require("../../Assets/icons/twitter.png").default },
  { img: require("../../Assets/icons/instagram.png").default },
  { img: require("../../Assets/icons/youtube.png").default },
  { img: require("../../Assets/icons/controlEscolar.png").default },
];

const Navbar = () => {
  const [menuItemsCheck, setMenuItemsCheck] = useState(false);

  const checkMenuItemsCheck = () => {
    setMenuItemsCheck(!menuItemsCheck);
  };
  useEffect(() => {}, []);

  return (
    <>
      <ContainerMenuGeneral>
        <Wrapper>
          <Link to='/'>
            <img src={LogoBUAP} alt='_ESCUDO_BUAP' className='LogoBUAP' />
          </Link>

          {/* MENU VSTA MONITOR */}
          <Menu>
            <MenuItem>
              <MenuItemLink>
                <p>Autoservicios</p>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <p>Correo BUAP</p>
              </MenuItemLink>
            </MenuItem>
            {ImageneLinks.map((item, id) => (
              <MenuItem key={id}>
                <MenuItemLink>
                  <img src={item.img} alt='' />
                </MenuItemLink>
              </MenuItem>
            ))}
          </Menu>

          {/* MENU VISTA MOVIL */}
          <MenuMobilIcon onClick={() => checkMenuItemsCheck()}>
            {menuItemsCheck ? <FaTimes /> : <FaBars />}
          </MenuMobilIcon>

          <MenuResponsive show={menuItemsCheck}>
            <MenuResponsiveItem>
              <MenuResponsiveItemLink>Inicio</MenuResponsiveItemLink>
            </MenuResponsiveItem>
            <MenuResponsiveItem>
              <MenuResponsiveItemLink>Mision</MenuResponsiveItemLink>
            </MenuResponsiveItem>
            <MenuResponsiveItem>
              <MenuResponsiveItemLink>Vision</MenuResponsiveItemLink>
            </MenuResponsiveItem>
            <MenuResponsiveItem>
              <MenuResponsiveItemLink>Organigrama</MenuResponsiveItemLink>
            </MenuResponsiveItem>
            <MenuResponsiveItem>
              <MenuResponsiveItemLink>Instalaciones</MenuResponsiveItemLink>
            </MenuResponsiveItem>
          </MenuResponsive>
        </Wrapper>
      </ContainerMenuGeneral>
    </>
  );
};

export default Navbar;

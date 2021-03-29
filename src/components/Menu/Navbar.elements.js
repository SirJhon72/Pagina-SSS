import styled from "styled-components";

export const ContainerMenuGeneral = styled.div`
  width: 100%;
  height: 77px;
  background: #003c5e;
  z-index: 99;
  position: relative;
  top: 0;
  left: 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  padding: 0 0.5rem;
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;

  @media screen and (max-width: 1020px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Source Sans Pro", sans-serif;
  color: white;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
`;

export const MenuItemLink = styled.a`
  text-decoration: none;
  height: 100%;
  justify-content: center;
  align-items: center;

  p {
    padding: 0 1rem;
  }

  img {
    padding-left: 5px;
  }
`;

export const MenuResponsive = styled.ul`
  display: none;

  @media screen and (max-width: 1020px) {
    display: block;
    width: 50%;
    height: 90vh;
    background-color: #194f6e;
    position: fixed;
    top: 77px;
    box-sizing: border-box;
    transition: 0.4s all ease-in;
    left: ${({ show }) => (show ? "50%" : "100%")};
    list-style: none;
    flex-wrap: wrap;
    align-items: flex-start;
  }
`;

export const MenuResponsiveItem = styled.li`
  width: 100%;
  font-family: "Source Sans Pro", sans-serif;
  color: white;
  font-weight: 400;
  font-size: 14px;
  padding: 0.5rem 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #00c9f0;
    transition: 0.3s all ease-in;
  }
`;

export const MenuResponsiveItemLink = styled.a`
  text-decoration: none;
`;

export const MenuMobilIcon = styled.div`
  display: none;

  @media screen and (max-width: 1020px) {
    display: flex;
    font-size: 3rem;
    color: white;
    cursor: pointer;
  }
`;

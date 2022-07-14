import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Link as Slink } from "react-scroll";

import { FaBars, FaTimes, FaArrowLeft } from "react-icons/fa";
import { Float } from "../../utils/Animation";
import { breakpoints } from "../../utils/Media";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Bars = styled(FaBars)`
  cursor: pointer;
  margin-right: 1rem;
  animation: ${Float} 0.5s forwards;
`;

export const Times = styled(FaTimes)`
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 5rem;
  right: 3rem;
`;

export const Arrow = styled(FaArrowLeft)`
  cursor: pointer;
  color: #000;
  margin-left: 1rem;
  animation: ${Float} 0.5s forwards;
`;

export const NavMenu = styled.div`
  display: none;
  height: 100vh;
  width: 100%;
  background-color: #000;
  margin-top: 0;
  position absolute;
  top: 0;
  right: 0;
  z-index: 1000;
  opacity: 0;
  animation: ${Float} .5s forwards;
  padding: 2.5rem 0;

  
    &.active {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
  
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2em;
  justify-content: center;
  margin-bottom: 20px;
  padding: 1rem;
  width: 100%;

  @media (min-width: ${breakpoints.desktopMin}) {
    font-size: 3em;
    transition: 0.3s;
    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;

export const Links = styled(Slink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2em;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 1rem;
  width: 100%;

  @media (min-width: ${breakpoints.desktopMin}) {
    font-size: 3em;
    transition: 0.3s;
    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;

export const ExtraDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    margin: 0 1rem;
    color: #000;
    font-size: 1rem;
    font-weight: 500;

    @media (min-width: 760px) {
      font-size: 1.3rem;
    }
  }
`;

export const H3 = styled.h3`
  animation: ${Float} 0.5s forwards;
`;

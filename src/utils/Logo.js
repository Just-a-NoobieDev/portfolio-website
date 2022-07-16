import React from "react";
import logosvg from "../images/logo.svg";
import styled from "styled-components/macro";
import { Float } from "./Animation";

const LogoImg = styled.div`
  position: relative;
  background-image: url(${logosvg});
  width: 47px;
  height: 27px;
  background-repeat: no-repeat;
  cursor: pointer;
  animation: ${Float} 0.5s forwards;

  @media (min-width: 760px) {
    margin-right: 4rem;
  }
`;

function Logo() {
  return <LogoImg />;
}

export default Logo;

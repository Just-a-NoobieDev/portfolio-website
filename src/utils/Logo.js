import React from "react";
import logosvg from "../images/logo.svg";
import styled from "styled-components/macro";

const LogoImg = styled.div`
  position: relative;
  background-image: url(${logosvg});
  width: 47px;
  height: 27px;
  background-repeat: no-repeat;
`;

function Logo() {
  return <LogoImg />;
}

export default Logo;

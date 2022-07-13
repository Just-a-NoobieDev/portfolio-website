import styled from "styled-components";

import image from "../images/landing-image.jpg";
import { breakpoints } from "../utils/Media";
import { Float } from "../utils/Animation";

const Image = styled.div`
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 100%;
  border-radius: 4px;
  height: 300px;
  background-size: cover;
  background-image: url(${image});
  background-color: #f5f5f5;
  background-position: center;
  transform: translateY(30px);
  opacity: 0;
  animation: ${Float} 1s 0.6s forwards;
  @media (min-width: ${breakpoints.mobileMax}) {
    width: 100%;
    height: 400px;
    background-position-x: right;
    background-position-y: center;
  }
`;

function LandingImage() {
  return <Image />;
}

export default LandingImage;

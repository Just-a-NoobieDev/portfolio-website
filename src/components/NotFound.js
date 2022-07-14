import styled from "styled-components";
import { disableBodyScroll } from "body-scroll-lock";

import { Container } from "../utils/Container";
import { breakpoints } from "../utils/Media";
import NotFoundImg from "../images/notfound.png";

const NFContainer = styled(Container)`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${NotFoundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: 17rem;

  @media (min-width: 760px) {
    height: 400px;
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    height: 500px;
    width: 800px;
    margin-top: 0;
  }
`;

const TextDiv = styled.div`
  position: absolute;
  top: -9rem;
  left: 2rem;

  @media (min-width: 760px) {
    top: -2rem;
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    top: 2rem;
    left: 0;
  }
`;

const LargeText = styled.h2`
  font-size: 3.5rem;
  font-weight: 600;
  color: #b4e0e8;
  font-style: normal;
  margin: 0;
  line-height: 94px;

  @media (min-width: 760px) {
    font-size: 4rem;
    line-height: 100px;
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    font-size: 4.5rem;
    line-height: 124px;
  }
`;

const SmallText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 2px;
  margin: 0;

  @media (min-width: 760px) {
    font-size: 18px;
    line-height: 4px;
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    font-size: 20px;
    line-height: 6px;
  }
`;

function NotFound() {
  disableBodyScroll(document);

  return (
    <NFContainer>
      <Center>
        <TextDiv>
          <LargeText>OOPS...</LargeText>
          <SmallText>We can't find the page. :&#40;</SmallText>
        </TextDiv>
      </Center>
    </NFContainer>
  );
}

export default NotFound;

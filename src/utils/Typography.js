import { Float } from "./Animation";
import { breakpoints } from "./Media";
import styled from "styled-components";

export const QUERIES = {
  medium: `min-width: 1092px`,
  small: `min-width: 552px`,
  maxWidth: `1500px`,
};

export const Paragraph = styled.p`
  margin: 20px 0;
  color: #696969;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 184.69%;
  letter-spacing: 0.03em;
  cursor: default;
  a {
    border-bottom: 2px solid transparent;
    transition: 0.3s;
    :hover {
      border-bottom: 2px solid black;
    }
  }
`;

export const BtnLink = styled(Paragraph)`
  font-weight: 600;
  font-size: 14px;
  line-height: 163.19%;
  display: inline;
  color: #3e3e3e;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding: 15px;
  cursor: pointer;
  border: 1.5px solid #3e3e3e;
  transition: 0.3s;
  :hover {
    color: #ffffff;
    background-color: #3e3e3e;
  }
  span {
    font-size: 20px;
  }
`;

export const HeadingMain = styled.h1`
  font-weight: 600;
  font-size: 7vw;
  line-height: 129.69%;
  letter-spacing: 0.03em;
  margin-bottom: 0;
  margin-left: 0px;
  cursor: default;

  @media (min-width: ${breakpoints.mobileMax}) {
    font-size: 55px;
    margin-bottom: 0;
    margin-left: 50px;
  }
  .blue {
    color: #b4e0e8;
  }
  > span {
    display: inline-block;
    transform: translateY(30px);
    opacity: 0;
    animation: ${Float} 1s 0.2s forwards;
  }
  > span:nth-child(1) {
    animation-delay: 0s;
  }
  > span:nth-child(2) {
    animation-delay: 0.2s;
  }
  > span:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export const HeadingSec = styled(HeadingMain)`
  font-size: 33px;
  @media (min-width: ${breakpoints.mobileMax}) {
    font-size: 40px;
  }
`;

export const SubHeading = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 120%;
  letter-spacing: 0.03em;
  transform: translateY(30px);
  cursor: default;
  opacity: 0;
  animation: ${Float} 1s 0.2s forwards;
  @media (min-width: ${breakpoints.mobileMax}) {
    font-size: 40px;
    transform: scale(1);
  }
  > span {
    color: #b4e0e8;
  }
`;

export const TextContent = styled.div`
  max-width: 700px;
  .Paragraph {
    a {
      border-bottom: 2px solid transparent;
      transition: 0.3s;
      :hover {
        border-bottom: 2px solid black;
      }
    }
  }
`;

export const TextContentWrap = styled(TextContent)`
  width: 100%;
  ${Paragraph} {
    margin: 20px 0 40px 0px;
  }
  :nth-child(2) {
    ${Paragraph} {
      margin: 0px 0px;
      @media (min-width: ${breakpoints.mobileMax}) {
        margin: 40px 0;
      }
    }
  }
  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
  }
`;

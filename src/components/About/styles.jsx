import styled from "styled-components";

import Img from "../../images/no-bg-pic.png";
import { breakpoints } from "../../utils/Media";

export const AboutImg = styled.div`
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 300px;

  @media (min-width: 450px) {
    width: 70%;
    height: 450px;
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 450px;
    height: 450px;
    margin-right: 2rem;
    margin-top: 0;
  }

  @media (min-width: 1139px) {
    margin-right: 5rem;
  }
`;

export const SkillContent = styled.div`
  width: 85%;
`;

export const SkillTable = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  p {
    font-size: 14px;
    color: black;
    font-weight: 600;
    min-width: 200px;
    margin: 20px 0 0 0;
    @media (min-width: ${breakpoints.mobileMax}) {
      min-width: unset;
      margin: 30px 0;
    }
    span {
      font-size: 40px;
      margin-right: 25px;
      color: #b4e1e7;

      @media (min-width: ${breakpoints.mobileMax}) {
        margin-right: 5px;
      }
    }
  }
`;

export const Row = styled.div``;

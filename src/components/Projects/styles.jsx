import styled from "styled-components";

import { breakpoints } from "../../utils/Media";
import { Float } from "../../utils/Animation";
import { Paragraph } from "../../utils/Typography";

export const ProjectDiv = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  transition-duration: 0.3s;
`;

export const ProjectImage = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 4px;
  transition-duration: 0.3s;
  background-size: cover;
  background-position: center;
  transition-duration: 0.2s;
  opacity: 0;
  animation: ${Float} 1s 0.2s forwards;

  :hover {
    transform: scale(1.03);
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    height: 520px;
    background-position-x: center;
    background-position-y: center;
  }
`;

export const ProjectInfoDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-direction: row;
    margin-top: 2rem;
  }
`;

export const ProjectParagraph = styled(Paragraph)`
  margin-top: 10px;
  max-width: unset;
  margin-bottom: 20px;
  font-size: 14px;
  opacity: 0;
  animation: ${Float} 1s 0.2s forwards;
  @media (min-width: 760px) {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  @media (min-width: ${breakpoints.mobileMax}) {
    margin: 10px 0 20px 0;
    font-size: 16px;
  }
`;

export const TitleDescDiv = styled.div`
  width: 100%;
  pointer-events: none;
  text-align: center;
  @media (min-width: ${breakpoints.mobileMax}) {
    width: 50%;
    text-align: unset;
  }
`;

export const ProjectTable = styled.table`
  width: 100%;
  text-align: left;
  opacity: 0;
  animation: ${Float} 1s 0.2s forwards;
  th {
    text-align: center;
    font-style: normal;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 129.69%;
    letter-spacing: 0.03em;
    padding-bottom: 20px;

    @media (min-width: 760px) {
      font-size: 14px;
    }
  }
  td {
    text-align: center;
    width: 100px;
    font-size: 14px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 50%;
  }
`;

export const Bold = styled.td`
  a {
    font-size: 14px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
    font-weight: 900;
    color: #dd7834;
    border-bottom: 2px solid transparent;
    transition: 0.3s;
    padding-bottom: 3px;
    :hover {
      border-bottom: 2px solid #dd7834;
    }

    &.disable {
      pointer-events: none;
      opacity: 0.6;
    }

    @media (min-width: ${breakpoints.mobileMax}) {
      font-size: 16px;
    }
  }
`;

export const ProjectLink = styled(Paragraph)`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  line-height: 163.19%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s;
  cursor: pointer;
  background-color: #222;
  color: #fff;
  padding: 0.5rem 1rem;

  @media (min-width: ${breakpoints.mobileMax}) {
    display: block;
    font-size: 18px;
    margin: 2rem auto;
  }
  :hover {
    border-bottom: 2px solid #696969;
    opacity: 0.8;
  }
  span {
    font-size: 20px;
  }
`;

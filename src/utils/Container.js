import styled from "styled-components/macro";
import { breakpoints } from "./Media";

export const Container = styled.div`
  width: 100%;
  margin: 100px auto;
  flex-wrap: wrap;
`;
export const FullWidthContainer = styled.div``;

export const AboutContainer = styled.div`
  margin: 20px 0 0 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    padding-left: 2rem;
    justify-content: space-between;
  }
`;

export const SubContainer = styled.div`
  margin: 70px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

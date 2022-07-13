import styled from "styled-components/macro";
import { breakpoints } from "./Media";

export const Container = styled.div`
  width: 100%;
  margin: 100px auto;
  flex-wrap: wrap;
`;
export const FullWidthContainer = styled.div``;

export const AboutContainer = styled.div`
  margin: 2rem 0 0 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

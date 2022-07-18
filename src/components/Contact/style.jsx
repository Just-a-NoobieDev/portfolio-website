import styled from "styled-components";

import { Container } from "../../utils/Container";
import { Paragraph } from "../../utils/Typography";
import { breakpoints } from "../../utils/Media";

export const ContactContainer = styled(Container)`
    margin top 7rem;
    margin-bottom: 0;
    border-top: 2px solid #3e3e3e;
`;

export const SubHeadingGray = styled(Paragraph)`
  font-size: 22px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 0;
`;

export const ContactParagraph = styled(Paragraph)`
  @media (min-width: 768px) {
    max-width: 500px;
    text-align: center;
    margin-top: 0;
  }
`;

export const Email = styled.div`
  color: black;
  font-weight: 700;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
  display: inline-block;
  transition: border-bottom 0.2s;
  :hover {
    border-bottom: 2px solid transparent;
  }
`;

export const SubContainer = styled.div`
  margin: 70px 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

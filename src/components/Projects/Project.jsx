import styled from "styled-components";

import { SubContainer } from "../../utils/Container";
import { SubHeading, Paragraph } from "../../utils/Typography";
import { breakpoints } from "../../utils/Media";
import { Float } from "../../utils/Animation";

import ProjectInfo from "./ProjectInfo";

const ProjectDiv = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  transition-duration: 0.3s;
`;

const ProjectImage = styled.div`
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

const ProjectInfoDiv = styled.div`
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

const ProjectParagraph = styled(Paragraph)`
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

const TitleDescDiv = styled.div`
  width: 100%;
  pointer-events: none;
  text-align: center;
  @media (min-width: ${breakpoints.mobileMax}) {
    width: 50%;
    text-align: unset;
  }
`;

function Project({ title, description, image, type, stacks, repo, live }) {
  return (
    <SubContainer>
      <ProjectDiv>
        <ProjectImage style={{ backgroundImage: `url(${image})` }} />
        <ProjectInfoDiv>
          <TitleDescDiv>
            <SubHeading>{title}</SubHeading>
            <ProjectParagraph>{description}</ProjectParagraph>
          </TitleDescDiv>
          <ProjectInfo type={type} stacks={stacks} repo={repo} live={live} />
        </ProjectInfoDiv>
      </ProjectDiv>
    </SubContainer>
  );
}

export default Project;

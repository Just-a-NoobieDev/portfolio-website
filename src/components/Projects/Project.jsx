import {
  ProjectDiv,
  ProjectImage,
  ProjectInfoDiv,
  ProjectParagraph,
  TitleDescDiv,
} from "./styles";

import ProjectInfo from "./ProjectInfo";
import { SubContainer } from "../../utils/Container";
import { SubHeading } from "../../utils/Typography";

function Project({
  title,
  description,
  image,
  type,
  stacks,
  repo,
  live,
  status,
}) {
  return (
    <SubContainer>
      <ProjectDiv>
        <ProjectImage style={{ backgroundImage: `url(${image})` }} />
        <ProjectInfoDiv>
          <TitleDescDiv>
            <SubHeading>{title}</SubHeading>
            <ProjectParagraph>{description}</ProjectParagraph>
          </TitleDescDiv>
          <ProjectInfo
            type={type}
            stacks={stacks}
            repo={repo}
            live={live}
            status={status}
          />
        </ProjectInfoDiv>
      </ProjectDiv>
    </SubContainer>
  );
}

export default Project;

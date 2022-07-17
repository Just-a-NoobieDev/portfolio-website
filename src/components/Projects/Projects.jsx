import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container } from "../../utils/Container";
import { breakpoints } from "../../utils/Media";
import { TextContent, SubHeading, Paragraph } from "../../utils/Typography";
import Project from "./Project";
import INFOS from "../../data/data.json";
import imagesLink from "../../data/images";

const ProjectLink = styled(Paragraph)`
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

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 119px;
    display: block;
    font-size: 18px;
    margin: 2rem auto;
  }
  :hover {
    border-bottom: 2px solid #696969;
  }
  span {
    font-size: 20px;
  }
`;

function Projects() {
  return (
    <Container style={{ marginTop: "150px" }}>
      <TextContent style={{ maxWidth: "750px", marginBottom: "5rem" }}>
        <SubHeading>Projects that I've been working on</SubHeading>
        <Paragraph>
          Watching tutorials and reading documentation is not enough to learn
          coding. Apply it by building projects and see the progress that you
          made. <br /> <br />
          So I keep making myself busy and always have a project to work on to
          effectively enhance my skills in web development. Take a look at some
          of the applications I've dedicated my time to.
        </Paragraph>
      </TextContent>

      {INFOS.map(({ id, title, description, stacks, type, repo, demoUrl }) => {
        if (id <= 1) {
          return (
            <Project
              key={id}
              title={title}
              description={description}
              stacks={stacks}
              type={type}
              repo={repo}
              live={demoUrl}
              image={`"${imagesLink[id]}"`}
            />
          );
        }
      })}

      <Link to="/projects">
        <ProjectLink
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          See More...
        </ProjectLink>
      </Link>
    </Container>
  );
}

export default Projects;

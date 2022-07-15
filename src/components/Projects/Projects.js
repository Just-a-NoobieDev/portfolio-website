import styled from "styled-components";

import { Container } from "../../utils/Container";
import { breakpoints } from "../../utils/Media";
import { TextContent, SubHeading, Paragraph } from "../../utils/Typography";
import Project from "./Project";
import Test from "../../images/test_image.jpg";
import { Link } from "react-router-dom";

const ProjectLink = styled(Paragraph)`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  line-height: 163.19%;
  margin-top: 2rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 119px;
    display: block;
    font-size: 18px;
    margin: 0 auto;
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

      <Project
        title="Test Project"
        description="Test Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quasi nihil consequuntur itaque laboriosam quas doloribus quos inventore eum tenetur!"
        type="personal"
        image={Test}
        stacks={["test", "test", "test"]}
        repo="/test"
        live="/test"
      />
      <Project
        title="Test Project"
        description="Test Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quasi nihil consequuntur itaque laboriosam quas doloribus quos inventore eum tenetur!"
        type="personal"
        image={Test}
        stacks={["test", "test", "test"]}
        repo="/test"
        live="/test"
      />
      <Link to="/projects">
        <ProjectLink>See More...</ProjectLink>
      </Link>
    </Container>
  );
}

export default Projects;

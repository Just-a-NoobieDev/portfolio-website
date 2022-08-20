import { Paragraph, SubHeading, TextContent } from "../../utils/Typography";

import { Container } from "../../utils/Container";
import INFOS from "../../data/data.json";
import { Link } from "react-router-dom";
import Project from "./Project";
import { ProjectLink } from "./styles";
import imagesLink from "../../data/images";
import { useState } from "react";

function ProjectSection() {
  const [data, setData] = useState(INFOS);

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

      {data &&
        data.map(
          ({ id, title, description, stacks, type, repo, demoUrl, status }) => {
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
                  status={status}
                />
              );
            }
            return null;
          }
        )}

      <Link to="/projects">
        <ProjectLink
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          View All
        </ProjectLink>
      </Link>
    </Container>
  );
}

export default ProjectSection;

import {
  SiJavascript,
  SiHtml5,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPhp,
} from "react-icons/si";

import { AboutContainer, Container, SubContainer } from "../../utils/Container";
import {
  Paragraph,
  SubHeading,
  TextContentWrap,
  TextContent,
  BtnLink,
} from "../../utils/Typography";
import { AboutImg, SkillContent, SkillTable } from "./styles";

function About() {
  return (
    <Container id="about">
      <SubHeading>About Me</SubHeading>
      <AboutContainer>
        <TextContentWrap>
          <Paragraph>
            Hi I am Carl James Roxas. I am a self taught web developer based in
            Bulacan, Philippines.
            <br />
            <br />
            Currently a college student studying Bachelor of Science in
            Information Technology major in Web and Mobile App Development. I’m
            obsessed on making website and learning everything about web
            development.
            <br />
            <br />
            Very passionate individual and highly motivated to become successful
            professional web developer and to build many applications that will
            make other peoples life easier is my ultimate goal.
          </Paragraph>
          <a href="" download="carljamesroxas-resume">
            <BtnLink>Download Resume</BtnLink>
          </a>
        </TextContentWrap>
        <AboutImg />
      </AboutContainer>
      <SubContainer>
        <SubHeading>My Skills</SubHeading>
        <TextContent>
          <Paragraph>
            Throughout my journey to become a web developer, I've learned and
            grasp solid foundation of programming and Web development concepts,
            and dedicate my full attention to learn and build applications with
            this concepts and tools.
          </Paragraph>
        </TextContent>
        <SkillContent>
          <SkillTable>
            <row>
              <Paragraph>
                <span>
                  <SiJavascript />
                </span>{" "}
                Javascript ES6
              </Paragraph>
              <Paragraph>
                <span>
                  <SiReact />
                </span>{" "}
                React
              </Paragraph>
            </row>
            <row>
              <Paragraph>
                <span>
                  <SiExpress />
                </span>{" "}
                Express
              </Paragraph>
              <Paragraph>
                <span>
                  <SiNodedotjs />
                </span>{" "}
                NodeJS
              </Paragraph>
            </row>
            <row>
              <Paragraph>
                <span>
                  <SiHtml5 />
                </span>{" "}
                HTML
              </Paragraph>
              <Paragraph>
                <span>
                  <SiCss3 />
                </span>{" "}
                CSS
              </Paragraph>
            </row>
            <row>
              <Paragraph>
                <span>
                  <SiMongodb />
                </span>{" "}
                MongoDB
              </Paragraph>
              <Paragraph>
                <span>
                  <SiMysql />
                </span>{" "}
                SQL
              </Paragraph>
            </row>
            <row>
              <Paragraph>
                <span>
                  <SiGit />
                </span>{" "}
                Git
              </Paragraph>
              <Paragraph>
                <span>
                  <SiPhp />
                </span>{" "}
                PHP
              </Paragraph>
            </row>
          </SkillTable>
        </SkillContent>
      </SubContainer>
    </Container>
  );
}

export default About;

import { AboutContainer, Container, SubContainer } from "../../utils/Container";
import { AboutImg, Row, SkillContent, SkillTable } from "./styles";
import {
  BtnLink,
  Paragraph,
  SubHeading,
  TextContent,
  TextContentWrap,
} from "../../utils/Typography";
import {
  SiExpress,
  SiGit,
  SiNextdotjs,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiNestjs,
  SiSupabase,
  SiGraphql,
} from "react-icons/si";
import {
  BiLogoTypescript,
  BiLogoGoLang,
  BiLogoPostgresql,
} from "react-icons/bi";
import { MdHttp } from "react-icons/md";

function About() {
  return (
    <Container id="about">
      <SubHeading>About Me</SubHeading>
      <AboutContainer>
        <TextContentWrap>
          <Paragraph>
            I am a full-stack web developer based in Bulacan, Philippines.
            Graduate of Bachelor of Science in Information Technology major in
            Web and Mobile App Development.
            <br />
            <br />
            Dedicated and passionate Software Developer with 1+ year of
            professional experience developing and implementing web based
            solutions, Proficient in full-stack web development, particularly
            focused on Backend side. Developed API and design database for a
            Sales and Inventory Management system that helps SME’s to streamline
            their process and increase profit. Eager to contribute my expertise
            and enthusiasm to innovative projects and collaborative teams.
          </Paragraph>
          <a href="Carl-James-Roxas-Resume.pdf" download target="_blank">
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
            <Row>
              <Paragraph>
                <span>
                  <BiLogoTypescript />
                </span>{" "}
                Typescript
              </Paragraph>
              <Paragraph>
                <span>
                  <SiNextdotjs />
                </span>{" "}
                NextJS
              </Paragraph>
            </Row>
            <Row>
              <Paragraph>
                <span>
                  <SiReact />
                </span>{" "}
                React
              </Paragraph>

              <Paragraph>
                <span>
                  <SiNestjs />
                </span>{" "}
                NestJS
              </Paragraph>
            </Row>
            <Row>
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
            </Row>
            <Row>
              <Paragraph>
                <span>
                  <BiLogoGoLang />
                </span>{" "}
                Go
              </Paragraph>
              <Paragraph>
                <span>
                  <SiSupabase />
                </span>{" "}
                Supabase
              </Paragraph>
            </Row>
            <Row>
              <Paragraph>
                <span>
                  <SiMongodb />
                </span>{" "}
                MongoDB
              </Paragraph>
              <Paragraph>
                <span>
                  <BiLogoPostgresql />
                </span>{" "}
                PostgreSQL
              </Paragraph>
            </Row>
            <Row>
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
            </Row>
            <Row>
              <Paragraph>
                <span>
                  <SiGraphql />
                </span>{" "}
                GraphQL
              </Paragraph>
              <Paragraph>
                <span>
                  <MdHttp />
                </span>{" "}
                REST API
              </Paragraph>
            </Row>
          </SkillTable>
        </SkillContent>
      </SubContainer>
    </Container>
  );
}

export default About;

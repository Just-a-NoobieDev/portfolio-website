  import {
    FaGithub,
    FaInstagramSquare,
    FaLinkedin,
    FaTwitter,
  } from "react-icons/fa";
import { HeroElements, HeroWrapCont, Line, Social, SocialDiv } from "./styles";

import { Container } from "../../utils/Container";
import { HeadingMain } from "../../utils/Typography";

function Hero() {
  return (
    <Container>
      <HeroWrapCont>
        <HeroElements>
          <Line className="line"></Line>
          <SocialDiv>
            <a
              title="Git - carllljamesss"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Just-a-NoobieDev"
            >
              <Social>
                <FaGithub className="git" size="1.5em" />
              </Social>
            </a>
            <a
              title="Linkedin - carllljamesss"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/carl-james-r-b66350201/"
            >
              <Social>
                <FaLinkedin className="linkedn" size="1.5em" />
              </Social>
            </a>
            <a
              title="Twitter - carllljamesss"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Carllljamessss"
            >
              <Social>
                <FaTwitter className="twitter" size="1.5em" />
              </Social>
            </a>
            <a
              title="Instagram - carllljamesss"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/carllljamesss/"
            >
              <Social>
                <FaInstagramSquare className="insta" size="1.5em" />
              </Social>
            </a>
          </SocialDiv>
        </HeroElements>
        <HeadingMain className="gray-text">
          <span>
            Hello, I am Carl James. <br />
          </span>
          <span>
            A passionate <span className="blue">Web Developer</span> , <br />{" "}
          </span>{" "}
          <span>and a Student.</span>
        </HeadingMain>
      </HeroWrapCont>
    </Container>
  );
}

export default Hero;

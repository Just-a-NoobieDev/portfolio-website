import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

import { HeroWrapCont, HeroElements, Line, Social } from "./styles";
import { Container } from "../../utils/Container";
import { HeadingMain } from "../../utils/Typography";

const SocialDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  margin-left: 20px;
`;

const SocLink = styled.a`
  color: gray;
  text-decoration: none;
  width: 40px;
  height: 27px;
`;

function Hero() {
  return (
    <Container>
      <HeroWrapCont>
        <HeroElements>
          <Line className="line"></Line>
          <SocialDiv>
            <a
              title="Instagram - carllljamesss"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/carllljamesss/"
            >
              <Social>
                <FontAwesomeIcon className="git" icon={faGithub} size="xl" />
              </Social>
            </a>
            <a
              title="Instagram - carllljamesss"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/carllljamesss/"
            >
              <Social>
                <FontAwesomeIcon
                  className="linkedn"
                  icon={faLinkedin}
                  size="xl"
                />
              </Social>
            </a>
            <a
              title="Instagram - carllljamesss"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/carllljamesss/"
            >
              <Social>
                <FontAwesomeIcon
                  className="twitter"
                  icon={faTwitter}
                  size="xl"
                />
              </Social>
            </a>
            <a
              title="Instagram - carllljamesss"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/carllljamesss/"
            >
              <Social>
                <FontAwesomeIcon
                  className="insta"
                  icon={faInstagramSquare}
                  size="xl"
                />
              </Social>
            </a>
          </SocialDiv>
        </HeroElements>
        <HeadingMain className="gray-text">
          <span>
            Hello, I am Carl James. <br />
          </span>
          <span>
            Self taught <span className="blue">Web Developer</span> , <br />{" "}
          </span>{" "}
          <span>and a Student.</span>
        </HeadingMain>
      </HeroWrapCont>
    </Container>
  );
}

export default Hero;

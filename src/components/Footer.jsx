import { Container } from "../utils/Container";
import { Link } from "react-router-dom";
import Logo from "../utils/Logo";
import { Paragraph } from "../utils/Typography";
import { SocialDiv } from "./Hero/styles";
import styled from "styled-components";

const Containers = styled(Container)`
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Links = styled.a`
  color: #3e3e3e;
  text-decoration: none;
  font-size: 14px;
  margin-right: 20px;

  &.last {
    margin-right: 0;
  }

  &:hover {
    border-bottom: 2px solid black;
  }

  @media (min-width: 760px) {
    font-size: 16px;
  }
`;

const Paragraphs = styled(Paragraph)`
  width: unset;
  font-size: 12px;
  text-align: center;

  @media (min-width: 760px) {
    font-size: 14px;
  }
`;

const Extra = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  @media (min-width: 1020px) {
    margin: 0;
  }
`;

const SocialDivs = styled(SocialDiv)`
  margin: 0 auto;

  @media (min-width: 1020px) {
    margin: 0;
  }
`;

function Footer() {
  const date = new Date();

  return (
    <Containers>
      <Extra>
        <Link to="/">
          <Logo />
        </Link>
        <Paragraphs>
          &copy; {date.getFullYear()} Carl James Roxas | All Rights Reserved
        </Paragraphs>
      </Extra>
      <SocialDivs>
        <Links
          title="Instagram - carllljamesss"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Just-a-NoobieDev"
        >
          github
        </Links>
        <Links
          title="Instagram - carllljamesss"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/carljamesroxas/"
        >
          linkedin
        </Links>
        <Links
          title="Twitter - carllljamesss"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/Carllljamessss"
        >
          twitter
        </Links>
        <Links
          className="last"
          title="Instagram - carllljamesss"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/carllljamesss/"
        >
          instagram
        </Links>
      </SocialDivs>
    </Containers>
  );
}

export default Footer;

import {
  ContactContainer,
  ContactParagraph,
  Email,
  SubContainer,
  SubHeadingGray,
} from "./style";

import { SubHeading } from "../../utils/Typography";

function Contact() {
  return (
    <ContactContainer>
      <SubContainer
        id="contact"
        style={{ marginTop: "6rem", marginBottom: "8rem" }}
      >
        <SubHeadingGray>HAVE A PROJECT IN MIND?</SubHeadingGray>
        <SubHeading
          style={{ fontWeight: 700, marginTop: "1rem", marginBottom: "1rem" }}
        >
          LET’S ACHIEVE TOGETHER
        </SubHeading>
        <ContactParagraph>
          Feel free to send me an email if you are looking for a developer, have
          a question, or just want to connect.
        </ContactParagraph>
        <a
          href="mailto:carljames.roxas.m@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Email>carljames.roxas.m@gmail.com</Email>
        </a>
      </SubContainer>
    </ContactContainer>
  );
}

export default Contact;

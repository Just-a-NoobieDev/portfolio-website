import { SubContainer } from "../../utils/Container";
import { SubHeading } from "../../utils/Typography";
import { Paragraphss, Paragraphs, Containers, Email } from "./style";

function Contact() {
  return (
    <Containers>
      <SubContainer id="contact" style={{ marginTop: "8rem" }}>
        <Paragraphs>HAVE A PROJECT IN MIND?</Paragraphs>
        <SubHeading
          style={{ fontWeight: 700, marginTop: "1rem", marginBottom: "1rem" }}
        >
          LET’S ACHIEVE TOGETHER
        </SubHeading>
        <Paragraphss>
          Feel free to send me an email if you are looking for a developer, have
          a question, or just want to connect.
        </Paragraphss>
        <a href="mailto:carljames.roxas.m@gmail.com" target="_blank">
          <Email>carljames.roxas.m@gmail.com</Email>
        </a>
      </SubContainer>
    </Containers>
  );
}

export default Contact;

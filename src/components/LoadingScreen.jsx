import ClipLoader from "react-spinners/ClipLoader";
import { Container } from "../utils/Container";
import styled from "styled-components";
import { Paragraph } from "../utils/Typography";
import { blink, typing } from "../utils/Animation";

const Containers = styled(Container)`
  height: 100vh;
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Paragraphs = styled(Paragraph)`
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  flex-wrap: wrap;
  border-right: 0.15em solid orange;
  margin: 0 auto;
  margin-bottom: 2rem;
  letter-spacing: 0.2em;
  animation: ${typing} 2.5s steps(40, end), ${blink} 0.75s step-end infinite;

  @media (min-width: 768px) {
    width: unset;
    white-space: nowrap;
    animation: ${typing} 6s steps(40, end), ${blink} 0.75s step-end infinite;
  }

  @media (min-width: 1020px) {
    animation: ${typing} 9s steps(40, end), ${blink} 0.75s step-end infinite;
  }
`;

export const LoadingScreen = ({ loading }) => {
  return (
    <Containers>
      <Paragraphs>Turning ideas into reality.</Paragraphs>
      <ClipLoader color={"#3e3e3e"} loading={loading} size={30} />
    </Containers>
  );
};

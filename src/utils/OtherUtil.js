import { bounce } from "./Animation";
import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  right: 20px;
  bottom: 10%;
  height: 15px;
  font-size: 2rem;
  z-index: 1000;
  cursor: pointer;
  color: #3e3e3e;
  animation: ${bounce} 2s ease infinite;

  @media (min-width: 860px) {
    right: 5%;
    bottom: 20%;
    font-size: 4rem;
  }
`;

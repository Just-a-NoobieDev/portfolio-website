import styled from "styled-components";

import { bounce } from "./Animation";

export const Button = styled.div`
  position: fixed;
  width: 100%;
  right: -90%;
  bottom: 10%;
  height: 20px;
  font-size: 4rem;
  z-index: 1;
  cursor: pointer;
  color: #3e3e3e;
  animation: ${bounce} 2s ease infinite;
`;

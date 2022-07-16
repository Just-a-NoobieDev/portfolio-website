import { setActiveLink } from "react-scroll/modules/mixins/scroller";
import styled from "styled-components";

import { BtnLink } from "../utils/Typography";

const Buttons = styled(BtnLink)`
  width: 90px;
  text-align: center;
  padding: 0.5rem 0.7rem;
  font-size: 12px;
  margin-bottom: 0;
  flex-wrap: wrap;
  margin-right: 10px;
  cursor: pointer;

  &.last {
    width: 110px;
  }

  &.active {
    color: #ffffff;
    background-color: #3e3e3e;
  }
`;

const Button = ({ text, setFilter, setActive, active }) => {
  return (
    <Buttons
      className={`${active == text.toLowerCase() ? "active" : ""}`}
      onClick={() => {
        setFilter(text);
        setActive(text.toLowerCase());
      }}
    >
      {text}
    </Buttons>
  );
};

export default Button;

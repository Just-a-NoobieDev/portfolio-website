import styled from "styled-components";
import { breakpoints } from "../utils/Media";

const Input = styled.input`
  width: 100%;
  height: 20px;
  font-size: 14px;
  border-radius: 5px;
  font-style: normal;
  font-weight: 600;
  padding: 10px;

  @media (min-width: 760px) {
    font-size: 16px;
    height: 30px;
    width: 70%;
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 500px;
    margin-right: 3rem;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: unset;
  }
`;

function SearchBar({ setSearch }) {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Input
        type="text"
        placeholder="Search for Project title"
        onChange={(e) => setSearch(e.target.value)}
      />
    </Form>
  );
}

export default SearchBar;

import { useState } from "react";
import styled from "styled-components";

import Project from "../components/Projects/Project";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import INFOS from "../data/data.json";
import imagesLink from "../data/images";
import { Container, SubContainer } from "../utils/Container";
import { HeadingSec } from "../utils/Typography";
import { breakpoints } from "../utils/Media";
import PaginatedItems from "../components/ProjectPage";

const Containers = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 1rem;
  @media (min-width: ${breakpoints.mobileMax}) {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

const Heading = styled(HeadingSec)`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  @media (min-width: ${breakpoints.mobileMax}) {
    width: unset;
  }
`;

const SubContainers = styled(SubContainer)`
  margin-top: 1rem;
  flex-direction: row;
  justify-content: center;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 70%;
    justify-content: space-evenly;
    margin-top: 0;
  }
`;

function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("all");
  const [filter, setFilter] = useState("all");

  return (
    <>
      <Containers>
        <Heading>MY PROJECTS</Heading>
        <SearchBar setSearch={setSearch} />
      </Containers>
      <SubContainers>
        <Button
          text="All"
          setFilter={setFilter}
          setActive={setActive}
          active={active}
        />
        <Button
          text="React"
          setFilter={setFilter}
          setActive={setActive}
          active={active}
        />
        <Button
          text="MERN"
          setFilter={setFilter}
          setActive={setActive}
          active={active}
        />
        <Button
          text="HTML & CSS"
          setFilter={setFilter}
          setActive={setActive}
          active={active}
        />
        <Button
          text="Vanilla JS"
          setFilter={setFilter}
          setActive={setActive}
          active={active}
        />
        <Button
          active={active}
          className="last"
          text="PHP & MySQL"
          setFilter={setFilter}
          setActive={setActive}
        />
      </SubContainers>
      <Container>
        <PaginatedItems itemsPerPage={3} search={search} filter={filter} />
      </Container>
    </>
  );
}

export default ProjectsPage;

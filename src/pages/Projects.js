import { Container, SubContainer } from "../utils/Container";
import { useEffect, useState } from "react";

import { BtnLink } from "../utils/Typography";
import { HeadingSec } from "../utils/Typography";
import INFOS from "../data/data.json";
import ProjectPaginate from "../components/Projects/ProjectPaginate";
import SearchBar from "../components/SearchBar";
import { breakpoints } from "../utils/Media";
import styled from "styled-components";

const Buttons = styled(BtnLink)`
  width: 150px;
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
    width: 80%;
    justify-content: space-evenly;
    margin-top: 0;
  }
`;

function ProjectsPage() {
  const [dataArr, setDataArr] = useState(INFOS);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const handleClick = (e) => {
    setFilter(e.target.id);
  };

  const searchedData = INFOS.filter((val) => {
    if (search === "") {
      return val;
    } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
      return val;
    }
    return null;
  });

  const filteredData = searchedData.filter((val) => {
    if (filter.toLowerCase() === "all") {
      return dataArr;
    } else if (
      filter.toLowerCase() === "others" &&
      !val.stacks.map((item) => item.toLocaleLowerCase()).includes("go") &&
      !val.stacks.map((item) => item.toLocaleLowerCase()).includes("nestjs") &&
      !val.stacks.map((item) => item.toLocaleLowerCase()).includes("react") &&
      !val.stacks.map((item) => item.toLocaleLowerCase()).includes("fullstack")
    ) {
      return val;
    } else if (
      filter.toLowerCase() == "frontend" &&
      !val.stacks.map((item) => item.toLocaleLowerCase()).includes("go") &&
      !val.stacks.map((item) => item.toLocaleLowerCase()).includes("nestjs") &&
      !val.stacks.map((item) => item.toLocaleLowerCase()).includes("fullstack")
    ) {
      return val;
    } else if (
      val.stacks
        .map((item) => item.toLocaleLowerCase())
        .includes(filter.toLowerCase())
    ) {
      return val;
    }
    return null;
  });

  useEffect(() => {
    setDataArr(filteredData);
  }, [search, filteredData]);

  return (
    <>
      <Containers>
        <Heading>MY PROJECTS</Heading>
        <SearchBar setSearch={setSearch} />
      </Containers>
      <SubContainers>
        <Buttons
          onClick={handleClick}
          className={`${filter.toLowerCase() === "all" ? "active" : ""}`}
          id="all"
        >
          All
        </Buttons>
        <Buttons
          onClick={handleClick}
          className={`${filter.toLowerCase() === "go" ? "active" : ""}`}
          id="go"
        >
          Go
        </Buttons>
        <Buttons
          onClick={handleClick}
          className={`${filter.toLowerCase() === "nestjs" ? "active" : ""}`}
          id="nestjs"
        >
          NestJs
        </Buttons>
        <Buttons
          onClick={handleClick}
          className={`${filter.toLowerCase() === "frontend" ? "active" : ""}`}
          id="frontend"
        >
          Front End Projects
        </Buttons>
        <Buttons
          onClick={handleClick}
          className={`${filter.toLowerCase() === "fullstack" ? "active" : ""}`}
          id="fullstack"
        >
          Full Stack Projects
        </Buttons>
      </SubContainers>
      <Container>
        <ProjectPaginate state={dataArr} itemsPerPage={3} />
      </Container>
    </>
  );
}

export default ProjectsPage;

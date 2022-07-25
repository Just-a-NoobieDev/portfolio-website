import { useState, useEffect } from "react";
import styled from "styled-components";

import INFOS from "../data/data.json";

import SearchBar from "../components/SearchBar";
import ProjectPaginate from "../components/Projects/ProjectPaginate";
import { Container, SubContainer } from "../utils/Container";
import { HeadingSec } from "../utils/Typography";
import { breakpoints } from "../utils/Media";
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
  const [dataArr, setDataArr] = useState(INFOS);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const handleClick = (e) => {
    setFilter(e.target.id);
  };

  const searchedData = INFOS.filter((val) => {
    if (search == "") {
      return val;
    } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
      return val;
    }
  });

  const filteredData = searchedData.filter((val) => {
    if (filter.toLowerCase() == "all") {
      return dataArr;
    } else if (
      val.stacks
        .map((item) => item.toLocaleLowerCase())
        .includes(filter.toLowerCase())
    ) {
      return val;
    }
  });

  useEffect(() => {
    setDataArr(filteredData);
  }, [search, filter]);

  return (
    <>
      <Containers>
        <Heading>MY PROJECTS</Heading>
        <SearchBar setSearch={setSearch} />
      </Containers>
      <SubContainers>
        <Buttons
          onClick={handleClick}
          className={`${filter.toLowerCase() == "all" ? "active" : ""}`}
          id="all"
        >
          All
        </Buttons>
        <Buttons
          onClick={handleClick}
          className={`${filter.toLowerCase() == "react" ? "active" : ""}`}
          id="react"
        >
          React
        </Buttons>
        <Buttons
          onClick={handleClick}
          className={`${filter.toLowerCase() == "mern" ? "active" : ""}`}
          id="mern"
        >
          MERN
        </Buttons>
        <Buttons
          onClick={handleClick}
          className={`${filter.toLowerCase() == "html & css" ? "active" : ""}`}
          id="html & css"
        >
          HTML & CSS
        </Buttons>
        <Buttons
          onClick={handleClick}
          className={`${filter.toLowerCase() == "vanilla js" ? "active" : ""}`}
          id="vanilla js"
        >
          Vanilla JS
        </Buttons>
        <Buttons
          onClick={handleClick}
          className={`${filter.toLowerCase() == "php & mysql" ? "active" : ""}`}
          id="php & mysql"
        >
          PHP & MySQL
        </Buttons>
      </SubContainers>
      <Container>
        <ProjectPaginate state={dataArr} itemsPerPage={3} />
      </Container>
    </>
  );
}

export default ProjectsPage;

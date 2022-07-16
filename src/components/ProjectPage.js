import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

import INFOS from "../data/data.json";
import imagesLink from "../data/images";
import Project from "../components/Projects/Project";
import { Container } from "../utils/Container";
import { Paragraph } from "../utils/Typography";

function Items({ currentItems, search, filter, setZero }) {
  return (
    <>
      {currentItems &&
      currentItems
        .filter((val) => {
          if (search == "") {
            return val;
          } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })
        .filter((val) => {
          if (filter.toLowerCase() == "all") {
            return val;
          } else if (
            val.stacks
              .map((item) => item.toLocaleLowerCase())
              .includes(filter.toLowerCase())
          ) {
            return val;
          }
        }).length > 0 ? (
        currentItems
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .filter((val) => {
            if (filter.toLowerCase() == "all") {
              return val;
            } else if (
              val.stacks
                .map((item) => item.toLocaleLowerCase())
                .includes(filter.toLowerCase())
            ) {
              return val;
            }
          })
          .map(({ id, title, description, stacks, type, repo, demoUrl }) => {
            return (
              <Project
                key={id}
                title={title}
                description={description}
                stacks={stacks}
                type={type}
                repo={repo}
                live={demoUrl}
                image={`"${imagesLink[id]}"`}
              />
            );
          })
      ) : (
        <>
          {setZero(true)}
          <Container>
            <Paragraph>No projects to show</Paragraph>
          </Container>
        </>
      )}
    </>
  );
}

function PaginatedItems({ itemsPerPage, search, filter }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [zero, setZero] = useState(false);

  console.log(zero);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(INFOS.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(INFOS.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % INFOS.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items
        currentItems={currentItems}
        search={search}
        filter={filter}
        setZero={setZero}
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}

export default PaginatedItems;

import { useEffect, useState } from "react";

import { Container } from "../../utils/Container";
import { Paragraph } from "../../utils/Typography";
import Project from "./Project";
import ReactPaginate from "react-paginate";
import imagesLink from "../../data/images";

function Items({ state, itemsPerPage, itemOffset, setPageCount }) {
  const [split, setSplit] = useState(null);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setSplit(state.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(state.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, state, setPageCount]);

  return (
    <>
      {split && split.length > 0 ? (
        split.map(
          ({ id, title, description, stacks, type, repo, demoUrl, status }) => {
            return (
              <Project
                key={id}
                title={title}
                description={description}
                stacks={stacks}
                type={type}
                repo={repo}
                live={demoUrl}
                status={status}
                image={`"${imagesLink[id]}"`}
              />
            );
          }
        )
      ) : (
        <>
          <Container>
            <Paragraph>No projects to show</Paragraph>
          </Container>
        </>
      )}
    </>
  );
}

function ProjectPaginate({ itemsPerPage, state }) {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const newOffset = (event.selected * itemsPerPage) % state.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items
        state={state}
        itemsPerPage={itemsPerPage}
        itemOffset={itemOffset}
        setPageCount={setPageCount}
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
        previousLinkClassName={`page-num ${pageCount === 1 ? "disable" : ""}`}
        previousClassName="tagli"
        nextLinkClassName={`page-num ${pageCount === 1 ? "disable" : ""}`}
        nextClassName="tagli"
        activeLinkClassName="active"
      />
    </>
  );
}

export default ProjectPaginate;

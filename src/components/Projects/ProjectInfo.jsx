import styled from "styled-components";
import { breakpoints } from "../../utils/Media";
import { Float } from "../../utils/Animation";

const ProjectTable = styled.table`
  width: 100%;
  text-align: left;
  opacity: 0;
  animation: ${Float} 1s 0.2s forwards;
  th {
    text-align: center;
    font-style: normal;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 129.69%;
    letter-spacing: 0.03em;
    padding-bottom: 20px;

    @media (min-width: 760px) {
      font-size: 14px;
    }
  }
  td {
    text-align: center;
    width: 100px;
    font-size: 14px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 50%;
  }
`;

const Bold = styled.td`
  a {
    font-size: 14px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
    font-weight: 900;
    color: #dd7834;
    border-bottom: 2px solid transparent;
    transition: 0.3s;
    padding-bottom: 3px;
    :hover {
      border-bottom: 2px solid #dd7834;
    }

    @media (min-width: ${breakpoints.mobileMax}) {
      font-size: 16px;
    }
  }
`;

function ProjectInfo({ type, stacks, repo, live }) {
  return (
    <ProjectTable>
      <tbody>
        <tr>
          <th>TYPE</th>
          <th>STACK</th>
          <th>CODE</th>
          <th>LIVE</th>
        </tr>
        {stacks.map((stack, index) => {
          return (
            <tr key={index + 1}>
              {index >= 1 ? (
                <>
                  <td></td>
                  <td>{stack}</td>
                  <td></td>
                  <td></td>
                </>
              ) : (
                <>
                  <td>{type}</td>
                  <td>{stack}</td>
                  <Bold>
                    <a href={repo}>Repository</a>
                  </Bold>
                  <Bold>
                    <a href={live}>View Site</a>
                  </Bold>
                </>
              )}
            </tr>
          );
        })}
      </tbody>
    </ProjectTable>
  );
}

export default ProjectInfo;

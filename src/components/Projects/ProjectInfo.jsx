import { Bold, ProjectTable } from "./styles";

function ProjectInfo({ type, stacks, repo, live, status }) {
  return (
    <ProjectTable>
      <tbody>
        <tr>
          <th>STATUS</th>
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
                  <td></td>
                  <td>{stack}</td>
                  <td></td>
                  <td></td>
                </>
              ) : (
                <>
                  <td>{status}</td>
                  <td>{type}</td>
                  <td>{stack}</td>
                  <Bold>
                    <a href={repo}>Repository</a>
                  </Bold>
                  <Bold className={`${live === "" ? "disable" : ""}`}>
                    <a href={live}>{`${
                      live === "" ? "No url" : "View Site"
                    }`}</a>
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

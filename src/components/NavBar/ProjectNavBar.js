import Logo from "../../utils/Logo";
import { Arrow, Nav, ExtraDiv, H3 } from "./styles";
import { Link } from "react-router-dom";

function ProjectNavBar() {
  return (
    <Nav>
      <Link to="/">
        <ExtraDiv>
          <Arrow size=".7em" />
          <H3>Back</H3>
        </ExtraDiv>
      </Link>
      <Link to="/">
        <Logo />
      </Link>
    </Nav>
  );
}

export default ProjectNavBar;

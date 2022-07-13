import { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Link } from "react-router-dom";

import Logo from "../../utils/Logo";
import { Bars, Nav, NavMenu, Times, NavLink, Links } from "./styles";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  click ? disableBodyScroll(document) : enableBodyScroll(document);

  const closeMenu = () => setClick(false);

  return (
    <Nav>
      <Link to="/">
        <Logo />
      </Link>
      <Bars size="1.5em" onClick={handleClick} />
      <NavMenu className={click ? "active" : ""}>
        <Times size="2em" onClick={handleClick} />
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <Links
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={900}
          onClick={closeMenu}
        >
          About
        </Links>
        <NavLink to="/projects" onClick={closeMenu}>
          Projects
        </NavLink>
        <Links
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={900}
          onClick={closeMenu}
        >
          Contact
        </Links>
      </NavMenu>
    </Nav>
  );
}

export default NavBar;

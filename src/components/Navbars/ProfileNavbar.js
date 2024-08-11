import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function ProfileNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/projects">
                  <NavLink>
                    <i className="now-ui-icons objects_globe"></i>
                    <p>Projects</p>
                  </NavLink>
                </Link>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/in/rushikesh-warde/"
                  target="_blank"
                  id="tooltip-linkedin"
                >
                  <i className="fab fa-linkedin"></i>
                  <p>Connect</p>
                </NavLink>
                <UncontrolledTooltip target="#tooltip-linkedin">
                  Connect with me on Linkedin
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.youtube.com/@RW_Soft"
                  target="_blank"
                  id="tooltip-youtube"
                >
                  <i className="fab fa-youtube"></i>
                  <p>Subscribe</p>
                </NavLink>
                <UncontrolledTooltip target="#tooltip-youtube">
                  Subscribe to my YouTube Channel
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ProfileNavbar;

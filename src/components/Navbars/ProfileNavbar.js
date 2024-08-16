import React, { useState, useEffect } from "react";
// reactstrap components
import {
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function ProfileNavbar({ title }) {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const updateNavbar = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 399) {
        setNavbarColor("");
        setShowTitle(true);
      } else {
        setNavbarColor("navbar-transparent");
        setShowTitle(false);
      }
    };

    window.addEventListener("scroll", updateNavbar);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbar);
    };
  }, []);

  return (
    <>
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          {showTitle && (
            <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
              <h4 style={{ color: "#fff", margin: 0 }}>{title}</h4>
            </div>
          )}
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

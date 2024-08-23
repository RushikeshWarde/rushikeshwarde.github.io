import React, { useState, useEffect } from "react";
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

import {icons} from "assets/iconImports.js"

function ProjectsNavbar({title}) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [showTitle, setShowTitle] = useState(false);

  React.useEffect(() => {
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
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/about">
                  <NavLink>
                  <p><img src={icons["profileIcon"]} style={{ width: "25px", height: "25px", marginRight: "8px" }} />
                      Profile</p>
                  </NavLink>
                </Link>
              </NavItem>
            </Nav>
            {showTitle && (
            <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <h4><strong>{title}</strong></h4>
          </div>

          )}
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/in/rushikesh-warde/"
                  target="_blank"
                  id="tooltip-linkedin"
                >
                  <p><img src={icons["linkedinIcon"]} style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                  Connect</p>
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
                  <p><img src={icons["youtubeIcon"]} style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                  Subscribe</p>
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

export default ProjectsNavbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, NavLink, Nav, Container, UncontrolledTooltip } from "reactstrap";

import {icons} from "assets/iconImports";

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
      <Navbar className={"navbar-title fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/about">
                  <NavLink id="tooltip-profile">
                  <p><h5 style={{
                  marginTop: "5px",
                  marginBottom: "5px"
                }}><strong><img src={icons["profileIcon"]} alt="" style={{ width: "25px", height: "25px", marginRight: "8px" }} />
                      Profile</strong></h5></p>
                  </NavLink>
                </Link>
              </NavItem>
              <UncontrolledTooltip target="#tooltip-profile">
                About Me
              </UncontrolledTooltip>
            </Nav>
            {showTitle && (
            <Nav className="mr-auto ml-auto" 
               style={{
                 position: "absolute",
                 left: "50%",
                 transform: "translateX(-50%)",
                 color: "#fff",
                 textAlign: "center",
               }}
            navbar> 
              <p><h4 style={{
                  marginTop: "5px",
                  marginBottom: "5px"
              }}><strong>{title}</strong></h4></p>
            </Nav>
          )}
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                href="https://www.linkedin.com/in/rushikesh-warde/"
                target="_blank"
                id="tooltip-linkedin"
              >
                <p><h5 style={{
                  marginTop: "5px",
                  marginBottom: "5px"
              }}><strong><img src={icons["linkedinIcon"]} alt="" style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                Connect</strong></h5></p>
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
                <p><h5 style={{
                  marginTop: "5px",
                  marginBottom: "5px"
              }}><strong><img src={icons["youtubeIcon"]} alt="" style={{ width: "20px", height: "20px", marginRight: "8px" }} />
                Subscribe</strong></h5></p>
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

import React from "react";
import Tabs from "./index-sections/Tabs-Project-Listing.js";
import projectData from "data/projects.json";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import Navbar from "components/Navbars/ProjectsNavbar.js";
import ProjectsPageHeader from "components/Headers/ProjectsPageHeader.js";
import DefaultFooter from "components/Footers/Footer.js";

function ProjectsListingPage() {
  // For Page Name
  const title = "VR Development Showcase";
  
  React.useEffect(() => {
    document.title = title;
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <ProjectsPageHeader title={title} />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="10">
                <br /><br />
                <h2 className="title">Welcome to My VR Project Gallery</h2>
                <h5>
                  <p>
                    Explore an array of innovative VR projects designed to push the boundaries of immersive technology. 
                    Each project represents a unique blend of creativity, technical expertise, and a passion for creating 
                    compelling virtual experiences. From interactive training simulations to captivating VR games, see how 
                    these projects utilize virtual reality to craft engaging and transformative experiences.
                  </p>
                </h5>
                <br /><br />
                <h3> Featured Projects </h3>
                <h5>
                  <p>
                    Dive into detailed descriptions, view stunning visuals, and watch demonstration videos of each project. 
                    Whether you're a fellow developer, potential collaborator, or VR enthusiast, you'll find a wealth of 
                    knowledge and inspiration in these cutting-edge VR innovations. Each project is thoroughly documented 
                    to provide a deep understanding of the development process, technical complexities, and the creative 
                    solutions employed.
                    <br />
                    Feel free to reach out through the provided contact links for any inquiries or potential collaborations. 
                    Enjoy exploring my VR development showcase!
                    <br /><br />
                  </p>
                </h5>
              </Col>
            </Row>
            <Row>
              <Tabs projectData={projectData} />
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProjectsListingPage;

import React from "react";
import Tabs from "./index-sections/Tabs-Project-Listing.js";
import projectData from "data/ARProjects.json";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import Navbar from "components/Navbars/ProjectsNavbar.js";
import ProjectsPageHeader from "components/Headers/ProjectsPageHeader.js";
import DefaultFooter from "components/Footers/Footer.js";

function ProjectsListingPage() {
  // For Page Name
  const title = "AR Development Showcase";
  
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
      <Navbar title={title}/>
      <div className="wrapper">
        <ProjectsPageHeader title={title} />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="10">
                <br /><br />
                <h2 className="title">Welcome to My AR Project Gallery</h2>
                <h5>
                  <p>
                    Discover a diverse range of groundbreaking AR projects that are redefining the way we interact with the 
                    physical world. Each project showcases a unique fusion of creativity, technical prowess, and a passion 
                    for enhancing real-world experiences through augmented reality. From educational tools to immersive 
                    entertainment, explore how these projects leverage AR technology to create captivating and transformative 
                    experiences.
                  </p>
                </h5>
                <br /><br />
                <h3> Featured Projects </h3>
                <h5>
                  <p>
                    Explore in-depth project descriptions, view impressive visuals, and watch demonstration videos of each 
                    AR project. Whether you're a fellow developer, potential collaborator, or AR enthusiast, you'll find a 
                    wealth of insights and inspiration in these pioneering AR innovations. Each project is meticulously 
                    documented to provide a comprehensive understanding of the development process, technical challenges, 
                    and the innovative solutions implemented.
                    <br />
                    Feel free to reach out through the provided contact links for any inquiries or potential collaborations. 
                    Enjoy exploring my AR development showcase!
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

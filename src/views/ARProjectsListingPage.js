import React from "react";
import Tabs from "./index-sections/Tabs-Project-Listing.js";
import projectData from "data/ARProjects.json";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import Navbar from "components/Navbars/ProjectsNavbar.js";
import ProjectsPageHeader from "components/Headers/ProjectsListingPageHeader.js";
import Footer from "components/Footers/Footer.js";

function ProjectsListingPage() {
  // For Page Name
  const title = "AR Project Showcase";
  
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
        <ProjectsPageHeader title={title} headerImage = {require("assets/img/bg-ar.jpg")} />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="10">
                <br /><br />
                <h3> <strong>Featured Project</strong> </h3>
                <h5>
                  <p>
                  The real world, enhanced. My AR projects blur the line between physical and digital, transforming ordinary spaces into interactive, data-rich experiences. Whether overlaying 3D models onto real-world surfaces, enabling gesture-based interactions, or bringing static environments to life, these projects are built to engage, inform, and amaze—no headset required.
                  </p>
                </h5>
                <br /><br />
              </Col>
            </Row>
            <Tabs projectData={projectData} />
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ProjectsListingPage;

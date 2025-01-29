import React from "react";
import Tabs from "./index-sections/Tabs-Project-Listing.js";
import projectData from "data/WebProjects.json";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import Navbar from "components/Navbars/ProjectsNavbar.js";
import ProjectsPageHeader from "components/Headers/ProjectsListingPageHeader.js";
import Footer from "components/Footers/Footer.js";

function ProjectsListingPage() {
  // For Page Name
  const title = "Web Project Showcase";
  
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
        <ProjectsPageHeader title={title} headerImage = {require("assets/img/bg-web.jpg")} />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="10">
                <br /><br />
                <h3> <strong>Featured Project</strong> </h3>
                <h5>
                  <p>
                  Web experiences that go beyond the ordinary. From real-time multiplayer games to interactive applications, my web projects are designed to be fast, engaging, and accessible. Built for seamless interaction and optimized for performance, they bring people together in dynamic, immersive digital spaces — no downloads, no barriers, just instant experiences.
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

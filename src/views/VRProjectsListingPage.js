import React from "react";
import Tabs from "./index-sections/Tabs-Project-Listing.js";
import projectData from "data/VRProjects.json";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import Navbar from "components/Navbars/ProjectsNavbar.js";
import ProjectsPageHeader from "components/Headers/ProjectsListingPageHeader.js";
import Footer from "components/Footers/Footer.js";

function ProjectsListingPage() {
  // For Page Name
  const title = "VR Project Showcase";
  
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
        <ProjectsPageHeader title={title} headerImage = {require("assets/img/bg-vr.jpg")} />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="10">
                <br /><br />
                <h3> <strong>Featured Projects</strong> </h3>
                <h5>
                  <p>
                  Step inside, explore, and interact. My VR projects aren’t just about visuals — they’re about presence. Whether it’s training simulations, interactive experiences, or immersive storytelling, every project is crafted to make users feel truly inside the digital world. With intuitive mechanics, optimized performance, and seamless interactivity, these experiences redefine what’s possible in virtual reality.
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

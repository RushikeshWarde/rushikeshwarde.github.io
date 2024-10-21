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
  const title = "Web Project Development Showcase";
  
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
                <h2 className="title">Welcome to My Web Project Gallery</h2>
                <h5>
                  <p>
                    Discover a diverse collection of Windows and Web-based games that showcase creativity, technical prowess, 
                    and a deep passion for interactive entertainment. Each project offers a unique gaming experience, from casual 
                    web games to complex Windows applications. Whether you're looking for fast-paced action, strategic challenges, 
                    or immersive storytelling, these projects demonstrate the wide-ranging possibilities of game development across 
                    different platforms.
                  </p>
                </h5>
                <br /><br />
                <h3> <strong>Featured Projects</strong> </h3>
                <h5>
                  <p>
                    Explore in-depth descriptions, captivating visuals, and gameplay videos that highlight the key features of each 
                    game. Whether you're a game developer, a gaming enthusiast, or simply curious about the creative process, these 
                    projects provide valuable insights into the design, development, and implementation of engaging and entertaining 
                    games. Each project is meticulously documented to offer a comprehensive understanding of the challenges faced, 
                    the solutions found, and the innovations that bring these games to life.
                    <br />
                    Feel free to reach out through the provided contact links for any inquiries or potential collaborations. 
                    Enjoy exploring my Web development showcase!
                    <br /><br />
                  </p>
                </h5>
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

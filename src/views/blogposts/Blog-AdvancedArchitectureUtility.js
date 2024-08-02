import React from "react";
import Carousel from "../index-sections/Blog-Carousel.js";
import Tabs from "../index-sections/Tabs-VR-Shooting-Game.js";
import VideoEmbed from "../VideoEmbed.js";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProjectsPageHeader from "components/Headers/ProjectsPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function Blog_AdvancedArchitectureUtility() {

  //For Page Name
  const title = "First Person Shooter VR"

  //For Embede Video
  const videoUrl = "https://www.youtube.com/embed/W_UOxtLkqXA?si=LRwONmFNHdWZtawZ";
  
  //For Image Carousel
  const items = [
    {
      src: require("assets/img/mg/md1.png"),
      altText: "Create Room / Join Room",
      caption: "Create Room / Join Room"
    },
    {
      src: require("assets/img/mg/md3.png"),
      altText: "Chat Feature",
      caption: "Chat Feature"
    },
    {
      src: require("assets/img/mg/md4.png"),
      altText: "Animation / Movement Sync",
      caption: "Animation / Movement Sync"
    }
  ];

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
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
      <ExamplesNavbar />
      <div className="wrapper">
        <ProjectsPageHeader title={title} />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="10">
                <br></br><br></br>
                <h2> Project Overview </h2>
                <h5>
                  The Advanced Architecture Utility is a sophisticated tool designed for virtual interior design and architecture on the Meta platform. 
                  It allows users to modify and customize various aspects of a virtual apartment, including textures, models, furniture, and room layouts. 
                  This utility is ideal for architects, interior designers, and homeowners looking to visualize and experiment with different design elements 
                  in a virtual space.
                </h5>
                <Carousel items={items}/>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="10">
                <br></br><br></br><br></br>
                <h2>Key Features </h2>
                <Tabs />
              </Col>
              <Col className="ml-auto mr-auto text-center" md="10">
                <br></br><br></br><br></br>
                <h2> Technical Details </h2>
                  <h5>
                    <ul className="text-left">
                      <li><strong>Platform</strong>: Meta Quest</li>
                        <li><strong>Game Engine</strong>: Unity 3D</li>
                        <li><strong>Development Language</strong>: C#</li>
                        <li><strong>Real-Time Rendering</strong>: The utility supports real-time rendering of changes, allowing users to see immediate visual feedback as they make modifications.</li>
                        <li><strong>Lighting</strong>: Real-time lighting with baked shadows and ambient occlusion for enhanced depth and realism.</li>
                        <li><strong>User Interface</strong>: The tool features an intuitive menu system that enables easy selection and application of textures and materials.</li>
                        <li><strong>3D Model Interaction</strong>: Users can interact with 3D models of furniture and other interior elements, moving and placing them within the virtual space.</li>
                        <li><strong>Customization Options</strong>: A wide range of customization options are available, including different textures, colors, and materials for various surfaces and items.</li>
                    </ul>
                  </h5>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="10">
                <br></br><br></br>
                <VideoEmbed videoSrc={videoUrl} />
                <br></br><br></br>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="10">
                <h5>
                  <p>
                  The Advanced Architecture Utility provides a comprehensive and flexible toolset for virtual interior design, 
                  allowing users to experiment with various design elements and create customized, aesthetically pleasing spaces.
                  </p>
                </h5>
                <br></br><br></br>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default Blog_AdvancedArchitectureUtility;

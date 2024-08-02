import React from "react";
import Carousel from "../index-sections/Blog-Carousel.js";
import Tabs from "../index-sections/Tabs-First-Person-Shooter-VR.js";
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

function Blog_FirstPersonShooterVR() {

  //For Page Name
  const title = "First Person Shooter VR"

  //For Embeded Video
  const videoUrl = "https://www.youtube.com/embed/L6S7TlXKs7U?si=svfp5PDuCb0cZUaT";
  
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
                  First Person Shooter VR is an immersive virtual reality game that offers an 
                  action-packed experience, emphasizing quick reflexes, strategic gameplay, and 
                  immersive combat scenarios. The game is designed to challenge players as they 
                  navigate through various levels, battle enemies, and manage their health and score. 
                  It features a robust scoring system and persistent high scores, encouraging continuous 
                  play and competition.
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
                      <li><strong>Platform</strong>: Designed for VR headsets, providing a fully immersive experience.</li>
                        <li><strong>Game Engine</strong>: Unity 3D</li>
                        <li><strong>Development Language</strong>: C#</li>
                        <li><strong>Physics</strong>: The game also includes realistic physics for shooting mechanics and enemy reactions, contributing to the immersive experience.</li>
                        <li><strong>AI</strong>: Advanced AI systems control enemy behavior, ensuring dynamic and unpredictable interactions.</li>
                        <li><strong>Lighting</strong>: Real-time lighting with baked shadows and ambient occlusion for enhanced depth and realism.</li>
                        <li><strong>Audio</strong>:
                          <ul>
                            <li><strong>Sound Effects</strong>: Directional audio cues for enhanced spatial awareness.</li>
                            <li><strong>Background Music</strong>: Dynamic music that adapts to the intensity of the gameplay.</li>
                          </ul>
                        </li>
                        <li><strong>Control Scheme</strong>: The game utilizes VR motion controls for aiming, shooting, and interacting with the environment. The intuitive control system allows for precise movements and actions, essential for a fast-paced shooter.</li>
                        <li><strong>Input Devices</strong>: Full support for VR controllers with hand-tracking capabilities for weapon handling and interactions.</li>
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
                    First Person Shooter VR offers a thrilling and immersive shooting experience in a virtual reality setting. 
                    Its combination of strategic gameplay, challenging AI, and engaging mechanics makes it a standout title in 
                    the VR gaming landscape. The persistent scoring system and the need for careful health management add depth 
                    and replayability, making it an appealing choice for fans of the genre.
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

export default Blog_FirstPersonShooterVR;

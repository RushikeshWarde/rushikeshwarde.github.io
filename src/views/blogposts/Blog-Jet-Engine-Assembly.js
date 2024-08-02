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

function Blog_JetEngineAssembly() {

  //For Page Name
  const title = "Jet Engine Assembly VR"

  //For Embede Video
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
                  The VR Shooting Game is an immersive training experience designed specifically for the Meta Quest platform. 
                  It combines interactive gameplay mechanics, such as remote weapon grabbing, physical button interactions, 
                  and haptic feedback, to create a highly engaging and realistic virtual environment. 
                  The game focuses on honing the player's shooting skills by providing various objectives, including locating 
                  stationary and practice targets, and setting traps. It also incorporates innovative features like automatic 
                  door closures and disappearing targets, enhancing both the challenge and interactivity. 
                  The game is optimized for smooth performance, ensuring a seamless and enjoyable user experience.
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
                      <li><strong>Platform</strong>: Virtual Reality (VR) with support for major VR headsets (Oculus Rift, HTC Vive, Valve Index, etc.)</li>
                        <li><strong>Game Engine</strong>: Unity 3D</li>
                        <li><strong>Development Language</strong>: C#</li>
                        <li><strong>Physics</strong>: Realistic physics simulation for accurate projectile trajectories and environmental interactions.</li>
                        <li><strong>Lighting</strong>: Real-time lighting with baked shadows and ambient occlusion for enhanced depth and realism.</li>
                        <li><strong>Audio</strong>:
                          <ul>
                            <li><strong>Sound Effects</strong>: Directional audio cues for enhanced spatial awareness.</li>
                            <li><strong>Background Music</strong>: Dynamic music that adapts to the intensity of the gameplay.</li>
                          </ul>
                        </li>
                        <li><strong>User Interface</strong>: VR-optimized UI with easy-to-read in-game menus and HUD (Heads-Up Display) elements.</li>
                        <li><strong>Input Devices</strong>: Full support for VR controllers with hand-tracking capabilities for weapon handling and interactions.</li>
                        <li><strong>Performance Optimization</strong>:
                          <ul>
                            <li><strong>Frame Rate</strong>: Targeting 90 FPS for a smooth and comfortable VR experience.</li>
                            <li><strong>Level of Detail (LOD)</strong>: Dynamic LOD adjustments to maintain performance without sacrificing visual quality.</li>
                            <li><strong>Asynchronous Spacewarp (ASW)</strong>: Utilized for motion smoothing to reduce latency and improve user comfort.</li>
                          </ul>
                        </li>
                    </ul>
                  </h5>
              </Col>
              <Col className="ml-auto mr-auto text-center" md="10">
                <br></br><br></br>
                <VideoEmbed videoSrc={videoUrl} />
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

export default Blog_JetEngineAssembly;

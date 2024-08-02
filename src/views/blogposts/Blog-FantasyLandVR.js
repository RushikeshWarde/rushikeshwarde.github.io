import React from "react";
import Carousel from "../index-sections/Blog-Carousel.js";
import Tabs from "../index-sections/Tabs-Fantasy-Land-VR.js";
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

function Blog_FantasyLand() {
  
  //For Page Name
  const title = "First Person Shooter VR"

  //For Embede Video
  const videoUrl = "https://www.youtube.com/embed/J5qt8qk5kUk?si=mQGrPSM1x1zKk6WP";
  
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
                  Fantasy Land VR is an adventurous mini-game designed for the Meta Quest platform, 
                  set in a mysterious island environment. The game combines elements of exploration, 
                  puzzle-solving, and strategic thinking, offering players a rich and immersive experience. 
                  The primary objectives involve navigating the island, activating portals, and overcoming 
                  various obstacles, all while avoiding setbacks that can return players to the starting point.
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
                    <li><strong>Graphics and Environment</strong>:
                      <ul>
                        <li>
                          The game features a visually captivating island environment with a mystical and mysterious aesthetic.
                        </li>
                        <li>
                          The graphics are designed to immerse players in a fantasy world filled with intriguing landscapes and structures.
                        </li>
                      </ul> 
                    </li>
                    <li><strong>Lighting</strong>: Real-time lighting with baked shadows and ambient occlusion for enhanced depth and realism.</li>
                    <li><strong>User Interface</strong>: 
                      <ul>
                        <li>
                          The user interface is designed to be intuitive, guiding players through interactions with buttons, portals, and other elements.
                        </li>
                        <li>
                          The controls are optimized for VR, ensuring a smooth and responsive experience.
                        </li>
                      </ul>
                    </li>
                    <li><strong>Gameplay Mechanics</strong>: 
                      <ul>
                        <li>
                          The game incorporates VR-specific mechanics, such as motion controls for interacting with objects and navigating the environment.
                        </li>
                        <li>
                          The portal system is a key technical feature, allowing for seamless transitions between different parts of the island.
                        </li>
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
              <Col className="ml-auto mr-auto text-center" md="10">
                <h5>
                  <p>
                  Fantasy Land VR offers an engaging and immersive experience, blending exploration, 
                  strategy, and problem-solving in a beautifully crafted virtual world. Its unique mechanics 
                  and challenging gameplay make it a compelling adventure for players looking to test their 
                  skills and explore a fantastical environment.
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

export default Blog_FantasyLand;

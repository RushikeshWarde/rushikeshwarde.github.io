import React from "react";
import Carousel from "../index-sections/Blog-Carousel.js";
import Tabs from "../index-sections/Tabs-Multiplayer-Game.js";
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

function Blog_MultiplayerGame() {
  
  //For Page Name
  const title = "Multiplayer Game VR"

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
                  The "Multiplayer Game" is a metaverse application designed for casual gaming and 
                  social interaction. It allows users to create and join virtual rooms where they 
                  can meet and chat with friends in real-time. The app provides a simple and 
                  accessible way for users to connect and explore virtual spaces together, enhancing 
                  social connectivity and engagement.
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
                      <li><strong>Platform</strong>: 
                        <ul>
                          <li>
                            The app is hosted on <strong>Simmer</strong>, making it easily accessible through a web link.
                          </li>
                          <li> 
                            This platform choice ensures broad accessibility without the need for additional installations.
                          </li>
                        </ul>
                      </li>  
                      <li><strong>Game Engine</strong>: Unity 3D</li>
                      <li><strong>Development Language</strong>: C#</li>
                      <li><strong>Lighting</strong>: Real-time lighting with baked shadows and ambient occlusion for enhanced depth and realism.</li>
                      <li><strong>User Interface</strong>: 
                        <ul>
                          <li>The app features a simple and intuitive user interface for entering names, creating rooms, and navigating the space.
                          </li>
                          <li> 
                            The design prioritizes ease of use and accessibility for all players.
                          </li>
                        </ul>
                      </li>
                      <li><strong>Chat Functionality</strong>: 
                        <ul>
                          <li>
                              Real-time chat is integrated into the app, allowing for seamless communication between users. 
                          </li>
                          <li>
                              This feature is crucial for social interaction and enhances the overall user experience.
                          </li>
                        </ul>
                      </li>
                      <li><strong>Control Scheme</strong>: 
                        <ul>
                          <li>
                            Keyboard controls are implemented for navigation, with support for both mouse and arrow key inputs.
                          </li>
                          <li>
                            This provides users with flexible options for interacting with the virtual environment.
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
                  The "Multiplayer Game" offers a simple yet engaging way for users to connect with friends in a virtual space. 
                  Its focus on ease of use, real-time communication, and accessible navigation makes it a versatile platform 
                  for social gaming and interaction.
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

export default Blog_MultiplayerGame;

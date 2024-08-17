import React from "react";
import { Link } from 'react-router-dom';

// reactstrap components
import {
  Button,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Navbar from "components/Navbars/ProfileNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/Footer.js";
import { icons } from "assets/iconImports.js";

function ProfilePage() {
  React.useEffect(() => {
    document.title = "About";
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  
  return (
    <>
      <Navbar title="About"/>
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <h3 className="title">About me</h3>
            <h5 className="description">
              As a creative VR Developer, I am dedicated to crafting immersive and innovative virtual experiences. With a deep passion for technology and storytelling, I specialize in blending cutting-edge VR technologies with engaging game mechanics. My work focuses on pushing the limits of what's possible in virtual reality, exploring new dimensions of interaction, and creating experiences that captivate and inspire. Dive into my projects and join me on this exciting journey through the virtual realm!
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">My Portfolio</h4>
              </Col>
              <TabContent className="gallery">
                <TabPane>
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg1.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto" md="4" xl="4">
                <div className="nav-align-center">
                  <Link to="/VRProjects">
                    <Button
                    className="btn btn-info btn-lg"
                    size="lg"
                    ><p><img src={icons["vrProjectIcon"]} style={{ width: "20px", height: "20px" }} /> VR Projects</p>
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" md="4" xl="4">
                <div className="nav-align-center">
                  <Link to="/WebProjects">
                    <Button
                    className="btn btn-info btn-lg"
                    size="lg"
                    ><p><img src={icons["webProjectIcon"]} style={{ width: "20px", height: "20px" }} /> Web Projects</p>
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" md="4" xl="4">
                <div className="nav-align-center">
                  <Link to="/ARProjects">
                    <Button
                    className="btn btn-info btn-lg"
                    size="lg"
                    ><p><img src={icons["arProjectIcon"]} style={{ width: "20px", height: "20px" }} /> AR Projects</p>
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;

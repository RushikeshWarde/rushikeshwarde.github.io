import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";
import Navbar from "components/Navbars/ProfileNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/Footer.js";
import { icons } from "assets/iconImports.js";

import profileData from "data/profileData.json";

import "assets/css/custom-components.css";

function ProfilePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    document.title = "About";
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    // Load data from JSON
    setData(profileData);

    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar title="About" />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <h3 className="title">{data.aboutTitle}</h3>
            <h5 className="description">{data.aboutDescription}</h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">{data.portfolioTitle}</h4>
              </Col>
              <TabContent className="gallery">
                <TabPane>
                  <Col className="ml-auto mr-auto" md="10">
                  <Row className="collections">
                    {data.portfolioImages.map((item, index) => (
                      <Col md="6" key={index} className="text-center">
                        <img
                          alt={item.caption}
                          className="img-raised first-tab collections-custom"
                          src={require(`assets/img/portfolio/${item.image}`)}
                        ></img>
                        <p className="carousel-caption-profile d-none d-md-block"><strong class="caption-text-profile">{item.caption}</strong></p>
                      </Col>
                    ))}
                  </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
            <Row>
              {data.projectButtons.map((project, index) => (
                <Col className="ml-auto mr-auto" md="4" xl="4" key={index}>
                  <div className="nav-align-center">
                    <Link to={project.link}>
                      <Button className="btn btn-info btn-lg project-button" size="lg">
                        <p>
                          <img
                            src={icons[project.icon]}
                            style={{ width: "20px", height: "20px" }}
                            alt=""
                          />{" "}
                          {project.title}
                        </p>
                      </Button>
                    </Link>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;

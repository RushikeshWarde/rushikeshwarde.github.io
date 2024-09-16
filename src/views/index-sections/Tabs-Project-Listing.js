import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, NavItem, NavLink, Nav, TabContent, TabPane, Container, Row, Col } from "reactstrap";
import { images } from "assets/imageImports.js";
import "assets/css/custom-components.css";

function Tabs({ projectData }) {
  const [activeTab, setActiveTab] = React.useState("1");

  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Link to={projectData[0].link}>
                <Card className="card-list">
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-center"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={activeTab === "1" ? "active" : ""}
                          onClick={() => setActiveTab("1")}
                        >
                          {projectData[0].title}
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </CardHeader>
                  <CardBody>
                    <TabContent className="text-center" activeTab={"1"}>
                      <TabPane tabId="1">
                        <img
                          alt="..."
                          className="first-tab"
                          src={images[projectData[0].image]}
                        />
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          </Row>

          {projectData.length > 1 ? (
            <Row>
              {projectData.slice(1).map((project, index) => (
                <Col className="ml-auto mr-auto" md="4" xl="4" key={index}>
                  <Link to={project.link}>
                    <Card className="card-list">
                      <CardHeader>
                        <Nav
                          className="nav-tabs-neutral justify-content-center"
                          data-background-color="blue"
                          role="tablist"
                          tabs
                        >
                          <NavItem>
                            <NavLink
                              className={activeTab === (index + 2).toString() ? "active" : ""}
                              onClick={() => setActiveTab((index + 2).toString())}
                            >
                              {project.title}
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </CardHeader>
                      <CardBody>
                        <TabContent className="text-center" activeTab={(index + 2).toString()}>
                          <TabPane tabId={(index + 2).toString()}>
                            <img
                              alt="..."
                              className="other-tab"
                              src={images[project.image]}
                            />
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          ) : (
            <Row>
              <Col className="text-center">
                <h5>
                  <img
                    className="img-raised"
                    src={images["cs"]}
                    style={{width:"300px", height:"206px" }}
                  />
                </h5>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </>
  );
}

export default Tabs;

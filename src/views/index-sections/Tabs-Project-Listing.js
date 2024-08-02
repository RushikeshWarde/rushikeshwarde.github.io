import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [project1Pills, setProject1Pills] = React.useState("1");
  const [project2Pills, setProject2Pills] = React.useState("1");
  const [project3Pills, setProject3Pills] = React.useState("1");
  const [project4Pills, setProject4Pills] = React.useState("1");
  const [project5Pills, setProject5Pills] = React.useState("1");
  const [project6Pills, setProject6Pills] = React.useState("1");
  const [project7Pills, setProject7Pills] = React.useState("1");
  const [project8Pills, setProject8Pills] = React.useState("1");
  const [project9Pills, setProject9Pills] = React.useState("1");
  const [project10Pills, setProject10Pills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Link to="/projects/vr-shooting-game">
                <Card>
                    <CardHeader>
                        <Nav
                            className="nav-tabs-neutral justify-content-center"
                            data-background-color="blue"
                            role="tablist"
                            tabs
                        >
                            <NavItem>
                                <NavLink
                                    className={project1Pills === "1" ? "active" : ""}
                                    onClick={(e) => {
                                    setProject1Pills("1");
                                    }}
                                >
                                    VR Shooting Game
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </CardHeader>
                    <CardBody>
                        <TabContent
                            className="text-center"
                            activeTab={"project1Pills" + project1Pills}
                        >
                            <TabPane tabId="project1Pills1">
                                <img
                                    alt="..."
                                    className="img-raised"
                                    src={require("assets/img/bg1.jpg")}
                                >
                                </img>
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
              </Link>
            </Col>
        </Row>
        <Row>
            <Col className="ml-auto mr-auto" md="4" xl="4"> //2nd Col
              <Link to="/projects/advanced-architecture-utility"> //2nd
                <Card>
                    <CardHeader>
                        <Nav
                            className="nav-tabs-neutral justify-content-center"
                            data-background-color="blue"
                            role="tablist"
                            tabs
                        >
                            <NavItem>
                                <NavLink
                                    className={project2Pills === "1" ? "active" : ""}
                                    onClick={(e) => {
                                    setProject2Pills("1");
                                    }}
                                >
                                    Advanced Architechture Utility
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </CardHeader>
                    <CardBody>
                        <TabContent
                            className="text-center"
                            activeTab={"project2Pills" + project2Pills}
                        >
                            <TabPane tabId="project2Pills1">
                                <img
                                    alt="..."
                                    className="img-raised"
                                    src={require("assets/img/bg1.jpg")}
                                >
                                </img>
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
              </Link>
              <Link to="/projects/first-person-shooter-vr"> //5th
                <Card>
                    <CardHeader>
                        <Nav
                            className="nav-tabs-neutral justify-content-center"
                            data-background-color="blue"
                            role="tablist"
                            tabs
                        >
                            <NavItem>
                                <NavLink
                                    className={project5Pills === "1" ? "active" : ""}
                                    onClick={(e) => {
                                    setProject5Pills("1");
                                    }}
                                >
                                    First Person Shooter VR
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </CardHeader>
                    <CardBody>
                        <TabContent
                            className="text-center"
                            activeTab={"project5Pills" + project5Pills}
                        >
                            <TabPane tabId="project5Pills1">
                                <img
                                    alt="..."
                                    className="img-raised"
                                    src={require("assets/img/bg7.jpg")}
                                >
                                </img>
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
              </Link>
              <Link to="/projects/jet-engine-assembly"> //8th
                <Card>
                    <CardHeader>
                        <Nav
                            className="nav-tabs-neutral justify-content-center"
                            data-background-color="blue"
                            role="tablist"
                            tabs
                        >
                            <NavItem>
                                <NavLink
                                    className={project8Pills === "1" ? "active" : ""}
                                    onClick={(e) => {
                                    setProject8Pills("1");
                                    }}
                                >
                                    Jet Engine Assembly
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </CardHeader>
                    <CardBody>
                        <TabContent
                            className="text-center"
                            activeTab={"project8Pills" + project8Pills}
                        >
                            <TabPane tabId="project8Pills1">
                                <img
                                    alt="..."
                                    className="img-raised"
                                    src={require("assets/img/bg7.jpg")}
                                >
                                </img>
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
              </Link>
            </Col>
            <Col className="ml-auto mr-auto" md="4" xl="4"> //3rd Col
              <Link to="/projects/fantasy-land-vr"> //3rd
                <Card>
                    <CardHeader>
                        <Nav
                            className="nav-tabs-neutral justify-content-center"
                            data-background-color="blue"
                            role="tablist"
                            tabs
                        >
                            <NavItem>
                                <NavLink
                                    className={project3Pills === "1" ? "active" : ""}
                                    onClick={(e) => {
                                    setProject3Pills("1");
                                    }}
                                >
                                    Fantasy Land VR
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </CardHeader>
                    <CardBody>
                        <TabContent
                            className="text-center"
                            activeTab={"project3Pills" + project3Pills}
                        >
                            <TabPane tabId="project3Pills1">
                                <img
                                    alt="..."
                                    className="img-raised"
                                    src={require("assets/img/bg1.jpg")}
                                >
                                </img>
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
              </Link>
              <Link to="/projects/museum-tour-vr"> //6th
                <Card>
                    <CardHeader>
                        <Nav
                            className="nav-tabs-neutral justify-content-center"
                            data-background-color="blue"
                            role="tablist"
                            tabs
                        >
                            <NavItem>
                                <NavLink
                                    className={project6Pills === "1" ? "active" : ""}
                                    onClick={(e) => {
                                    setProject6Pills("1");
                                    }}
                                >
                                    Museum Tour VR
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </CardHeader>
                    <CardBody>
                        <TabContent
                            className="text-center"
                            activeTab={"project6Pills" + project6Pills}
                        >
                            <TabPane tabId="project6Pills1">
                                <img
                                    alt="..."
                                    className="img-raised"
                                    src={require("assets/img/bg7.jpg")}
                                >
                                </img>
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
              </Link>
              <Link to="/projects/trigger-application-ar"> //9th
                <Card>
                    <CardHeader>
                        <Nav
                            className="nav-tabs-neutral justify-content-center"
                            data-background-color="blue"
                            role="tablist"
                            tabs
                        >
                            <NavItem>
                                <NavLink
                                    className={project9Pills === "1" ? "active" : ""}
                                    onClick={(e) => {
                                    setProject9Pills("1");
                                    }}
                                >
                                    Trigger Application AR
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </CardHeader>
                    <CardBody>
                        <TabContent
                            className="text-center"
                            activeTab={"project9Pills" + project9Pills}
                        >
                            <TabPane tabId="project9Pills1">
                                <img
                                    alt="..."
                                    className="img-raised"
                                    src={require("assets/img/bg7.jpg")}
                                >
                                </img>
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
              </Link>
            </Col>
            <Col className="ml-auto mr-auto" md="4" xl="4"> //4th Col
              <Link to="/projects/multiplayer-game"> //4th
                <Card>
                    <CardHeader>
                        <Nav
                            className="nav-tabs-neutral justify-content-center"
                            data-background-color="blue"
                            role="tablist"
                            tabs
                        >
                            <NavItem>
                                <NavLink
                                    className={project4Pills === "1" ? "active" : ""}
                                    onClick={(e) => {
                                    setProject4Pills("1");
                                    }}
                                >
                                    Multiplayer Game
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </CardHeader>
                    <CardBody>
                        <TabContent
                            className="text-center"
                            activeTab={"project4Pills" + project4Pills}
                        >
                            <TabPane tabId="project4Pills1">
                                <img
                                    alt="..."
                                    className="img-raised"
                                    src={require("assets/img/mg/md2.png")}
                                >
                                </img>
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
              </Link>
              <Link to="/projects/interior-design-vr"> //7th
                <Card>
                    <CardHeader>
                        <Nav
                            className="nav-tabs-neutral justify-content-center"
                            data-background-color="blue"
                            role="tablist"
                            tabs
                        >
                            <NavItem>
                                <NavLink
                                    className={project7Pills === "1" ? "active" : ""}
                                    onClick={(e) => {
                                    setProject7Pills("1");
                                    }}
                                >
                                    Interior Design VR
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </CardHeader>
                    <CardBody>
                        <TabContent
                            className="text-center"
                            activeTab={"project7Pills" + project7Pills}
                        >
                            <TabPane tabId="project7Pills1">
                                <img
                                    alt="..."
                                    className="img-raised"
                                    src={require("assets/img/bg7.jpg")}
                                >
                                </img>
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
              </Link>
              <Link to="/projects/reticle-pointer-vr"> //10th
                <Card>
                    <CardHeader>
                        <Nav
                            className="nav-tabs-neutral justify-content-center"
                            data-background-color="blue"
                            role="tablist"
                            tabs
                        >
                            <NavItem>
                                <NavLink
                                    className={project10Pills === "1" ? "active" : ""}
                                    onClick={(e) => {
                                    setProject10Pills("1");
                                    }}
                                >
                                    Reticle Pointer VR
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </CardHeader>
                    <CardBody>
                        <TabContent
                            className="text-center"
                            activeTab={"project10Pills" + project10Pills}
                        >
                            <TabPane tabId="project10Pills1">
                                <img
                                    alt="..."
                                    className="img-raised"
                                    src={require("assets/img/bg7.jpg")}
                                >
                                </img>
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
              </Link>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;

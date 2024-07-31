import React from "react";

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
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="10">
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="black"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        Weapon Interaction
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        Gameplay Objectives
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        Haptic Feedback
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        Performance Optimization
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "5" ? "active" : ""}
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("5");
                        }}
                      >
                        Unique Mechanics
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                        Players can grab weapons from a distance, providing a 
                        seamless and intuitive interaction within the virtual environment.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills2">
                      <p>
                        The game includes tasks such as finding stationary and practice 
                        targets, traps, and using interactive elements like door knobs.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <p>
                        This feature enhances immersion by providing tactile feedback when players 
                        interact with objects, such as weapons, in the game.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills4">
                      <p>
                        The game settings are finely tuned for smooth gameplay, including 
                        adjustments like the far clipping plane and efficient asset management.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills5">
                      <p>
                        The game introduces innovative elements like automatic door closures, 
                        disappearing targets, and a returning shield, adding layers of complexity and strategy to the gameplay.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;

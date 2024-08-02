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
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="12" xl="12">
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-around"
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
                        Immersive VR Gameplay
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
                        Health Management and Recovery
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
                        Scoring System and High Scores
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
                        Enemy AI and Engagement
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
                        Main Menu and User Interface
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-left"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                        <ul>
                          <li>
                            The game provides a first-person perspective, immersing players directly into the action. 
                          </li>
                          <li>
                            The VR environment enhances the sense of presence and engagement, making the experience more intense and realistic.
                          </li>
                        </ul>
                      </p>
                    </TabPane>
                    <TabPane tabId="pills2">
                      <p>
                        <ul>
                          <li>
                            Players have a health bar that decreases when taking damage from enemies.
                          </li>
                          <li>  
                            Health packs, which are crucial for survival, can be collected to recover health points randomly ranging from 20 to 80.
                          </li>
                          <li>
                            Health packs drop with a 60% probability when enemies are defeated, adding a layer of strategy as players decide when to engage or avoid combat.
                          </li>
                        </ul>
                      </p>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <p>
                        <ul>
                          <li>
                            Players earn points for each enemy defeated, contributing to their overall score. 
                          </li>
                          <li>
                            The high score system tracks the highest points achieved across multiple game sessions, providing an incentive for players to improve their performance.
                          </li>
                          <li>
                            The persistence of high scores across sessions encourages players to return and beat their previous records, enhancing replayability.
                          </li>
                        </ul>
                      </p>
                    </TabPane>
                    <TabPane tabId="pills4">
                      <p>
                        <ul>
                          <li>  
                            The game features AI-controlled enemies that actively chase and attack players once detected.
                          </li>
                          <li>  
                            This adds urgency and requires players to be constantly alert and ready to respond.
                          </li>
                          <li>  
                            The dynamic behavior of enemies, including their pursuit mechanics, creates an exciting and challenging gameplay environment.
                          </li>
                        </ul>
                      </p>
                      </TabPane>
                      <TabPane tabId="pills5">
                      <p>
                        <ul>
                          <li>
                          The main menu provides easy access to game options, high score tracking, and gameplay settings. The user interface is designed for VR, ensuring intuitive navigation and interaction.
                          </li>
                        </ul>  
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

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
                        Island Exploration
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
                        Portal Activation
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
                        Dynamic Navigation and Path Creation
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
                        Challenge of Falling
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
                        Strategic Problem-Solving
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
                            Players explore a mystical island, discovering hidden pathways and interacting with various game elements. 
                          </li>
                          <li>
                            The island is filled with secrets and challenges that encourage players to thoroughly explore their surroundings.
                          </li>
                        </ul>
                      </p>
                    </TabPane>
                    <TabPane tabId="pills2">
                      <p>
                        <ul>
                          <li>
                            A central gameplay mechanic involves activating portals, which serve as checkpoints and means of transportation across the island.  
                          </li>
                          <li>  
                            These portals allow players to return to previously visited locations, facilitating exploration and strategy.
                          </li>
                        </ul>
                      </p>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <p>
                        <ul>
                          <li>
                            The game features interactive elements like buttons and bridges that players can use to create new paths.
                          </li>
                          <li>
                            This mechanic requires players to find and activate these elements to progress, adding a puzzle-solving aspect to the game.
                          </li>
                        </ul>
                      </p>
                    </TabPane>
                    <TabPane tabId="pills4">
                      <p>
                        <ul>
                          <li>  
                            A unique challenge in the game is the risk of falling from bridges or the island itself.
                          </li>
                          <li>  
                            If players fall, they are sent back to the starting point, adding a layer of difficulty and emphasizing careful navigation and planning.
                          </li>
                        </ul>
                      </p>
                      </TabPane>
                      <TabPane tabId="pills5">
                      <p>
                        <ul>
                          <li>
                            The game encourages players to think strategically and adapt to the environment.
                          </li>
                          <li>
                            Finding the right buttons and using portals effectively are key to overcoming obstacles and progressing through the game.
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

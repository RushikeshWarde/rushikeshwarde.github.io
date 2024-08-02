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
                        Real-Time Texture Modification
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
                        Furniture Arrangement
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
                        Material and Color Selection
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
                        Lighting Control
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "5" ? "active" : ""}
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        Team Collaboration
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
                            Users can change wall, floor, and ceiling textures dynamically.
                          </li>
                          <li>
                            A user-friendly menu provides a range of texture options, allowing for extensive customization.
                          </li>
                        </ul>
                      </p>
                    </TabPane>
                    <TabPane tabId="pills2">
                      <p>
                        <ul>
                          <li>
                            The utility enables the rearrangement of furniture and other interior elements. 
                          </li>
                          <li>  
                            Users can assess, move, and organize items like cupboards, sofas, and kitchen cabinets.
                          </li>
                          <li>  
                            The tool emphasizes efficient space utilization and effective movement techniques to prevent damage.
                          </li>
                        </ul>
                      </p>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <p>
                        <ul>
                          <li>
                            The platform offers a variety of materials and colors for different elements, such as kitchen cabinets, 
                            sofas, and window treatments.
                          </li>
                          <li>
                            The utility showcases how these changes can enhance the aesthetic appeal and ambiance of a space.
                          </li>
                        </ul>
                      </p>
                    </TabPane>
                    <TabPane tabId="pills4">
                      <p>
                        <ul>
                          <li>  
                            Users can manipulate lighting conditions, such as adjusting window blinds, to influence the room's atmosphere and privacy.
                          </li>
                        </ul>
                      </p>
                      </TabPane>
                      <TabPane tabId="pills5">
                      <p>
                        <ul>
                          <li>
                            This makes it easy for users to access and start playing the game.
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

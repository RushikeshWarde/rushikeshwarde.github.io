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
                        Virtual Room Creation and Joining
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
                        Real-Time Chatting
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
                        Navigation and Movement
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
                        Accessibility
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
                            Users can easily create a virtual room by entering their name and 
                            generating a unique code. 
                          </li>
                          <li>
                            This code can be shared with friends, 
                            allowing them to join the room and participate in the experience.
                          </li>
                          <li>
                            The app supports an intuitive room creation process, making it 
                            accessible for users to set up and invite others.
                          </li>
                        </ul>
                      </p>
                    </TabPane>
                    <TabPane tabId="pills2">
                      <p>
                        <ul>
                          <li>
                            The application features a real-time chat function, enabling users to 
                            communicate with each other while navigating the virtual space. 
                          </li>
                          <li>  
                            This enhances the social aspect of the game, allowing for dynamic 
                            interactions and conversations.
                          </li>
                        </ul>
                      </p>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <p>
                        <ul>
                          <li>
                            Users can navigate the virtual space using keyboard controls. 
                          </li>
                          <li>
                            The app supports movement through either mouse input or arrow keys, 
                            providing a flexible and immersive experience.
                          </li>
                          <li>
                            The control scheme is designed to be user-friendly, allowing for easy 
                            exploration of the virtual environment.
                          </li>
                        </ul>
                      </p>
                    </TabPane>
                    <TabPane tabId="pills4">
                      <p>
                        <ul>
                          <li>  
                            The game is accessible via a link on Simmer, a platform for sharing and playing 
                            interactive content. 
                          </li>
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

// KeyFeatures.js
import React, { useRef, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import "../assets/css/KeyFeatures.css"; // Ensure you have the correct path to your CSS

const KeyFeatures = ({ keyFeatures }) => {
  const keyFeaturesRef = useRef(null);

  // Add event listener for horizontal scrolling
  useEffect(() => {
    const handleScroll = (event) => {
      if (keyFeaturesRef.current && keyFeaturesRef.current.contains(event.target)) {
        keyFeaturesRef.current.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    };

    document.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div 
      className="key-features-scroll-container"
      ref={keyFeaturesRef}
    >
      {keyFeatures.map((feature, index) => (
        <Card key={index} style={{ minWidth: '300px', margin: '0 10px', border: '1px solid #ddd' }}>
          <CardHeader className="text-center">
            <Nav className="nav-tabs justify-content-center" role="tablist">
              <NavItem>
                <NavLink className={"active"}>
                  {feature.title}
                </NavLink>
              </NavItem>
            </Nav>
          </CardHeader>
          <CardBody>
            <TabContent activeTab={index.toString()}>
              <TabPane tabId={index.toString()}>
                <p>{feature.description}</p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default KeyFeatures;

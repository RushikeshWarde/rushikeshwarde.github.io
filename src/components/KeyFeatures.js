import React, { useRef, useEffect } from "react";
import { Card, CardHeader, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

import "assets/css/KeyFeatures.css"; 

const KeyFeatures = ({ keyFeatures }) => {
  const keyFeaturesRef = useRef(null);

  // Scroll functionality
  useEffect(() => {
    const handleScroll = (event) => {
      if (keyFeaturesRef.current && keyFeaturesRef.current.contains(event.target)) {
        keyFeaturesRef.current.scrollLeft += event.deltaY *50; // Speed up for touchpad users
        event.preventDefault();
      }
    };

    document.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, []);

  // Scroll navigation using chevrons
  const scrollLeft = () => {
    keyFeaturesRef.current.scrollBy({
      left: -300, // Scroll by card width
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    keyFeaturesRef.current.scrollBy({
      left: 300, // Scroll by card width
      behavior: "smooth",
    });
  };

  return (
    <div className="key-features-container">
      <div className="key-features-chevron left" onClick={scrollLeft}>
        <i className="fa fa-chevron-left"></i>
      </div>
      <div 
        className="key-features-scroll-container"
        ref={keyFeaturesRef}
      >
        {keyFeatures.map((feature, index) => (
          <Card key={index}>
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
      <div className="key-features-chevron right" onClick={scrollRight}>
        <i className="fa fa-chevron-right"></i>
      </div>
    </div>
  );
}

export default KeyFeatures;

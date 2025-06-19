import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardText, Collapse, Row, Col } from "reactstrap";
import { FaBoxes, FaUndo, FaPalette, FaChevronDown, FaChevronRight ,FaDesktop, FaImage, FaTablet, FaGamepad, FaSync, FaCube, FaSlidersH, FaBrain, FaHandPointer, FaVolumeUp, FaChalkboard, FaGraduationCap, FaPlay, FaSearchPlus, FaArrowsAlt, FaFolder, FaComments, FaCompass, FaKeyboard, FaHands, FaChartLine, FaCogs } from 'react-icons/fa';

import "assets/css/TechnicalDetails.css";

const TechnicalDetails = ({ technicalDetails }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const getIcon = (category) => {
    switch (category) {
      case "Automatic Positioning":
        return <FaUndo size={24} className="technical-details-icon" />;
      case "Visual Aid":
        return <FaPalette size={24} className="technical-details-icon" />;
      case "Visual Feedback":
        return <FaPalette size={24} className="technical-details-icon" />;
      case "Texture Library":
        return <FaBoxes size={24} className="technical-details-icon" />;
      case "Platform":
        return <FaDesktop size={24} className="technical-details-icon" />;
      case "Graphics and Rendering":
        return <FaImage size={24} className="technical-details-icon" />;
      case "User Interface":
        return <FaTablet size={24} className="technical-details-icon" />;
      case "User Interaction":
        return <FaTablet size={24} className="technical-details-icon" />;
      case "Control Mechanism":
        return <FaGamepad size={24} className="technical-details-icon" />;
      case "Gameplay Mechanics":
        return <FaGamepad size={24} className="technical-details-icon" />;
      case "Control Scheme":
        return <FaKeyboard size={24} className="technical-details-icon" />;
      case "Real-Time Rendering":
        return <FaSync size={24} className="technical-details-icon" />;
      case "3D Model Interaction":
        return <FaCube size={24} className="technical-details-icon" />;
      case "Customization Options":
        return <FaSlidersH size={24} className="technical-details-icon" />;
      case "AI and Physics":
        return <FaBrain size={24} className="technical-details-icon" />;
      case "Interactive Elements":
        return <FaHandPointer size={24} className="technical-details-icon" />;
      case "Audio":
        return <FaVolumeUp size={24} className="technical-details-icon" />;
      case "Educational Content Delivery":
        return <FaChalkboard size={24} className="technical-details-icon" />;
      case "Learning Focus":
        return <FaGraduationCap size={24} className="technical-details-icon" />;
      case "Animation Features":
        return <FaPlay size={24} className="technical-details-icon" />;
      case "Zoom Capability":
        return <FaSearchPlus size={24} className="technical-details-icon" />;
      case "Size Comparison":
        return <FaArrowsAlt size={24} className="technical-details-icon" />;
      case "Content Management":
        return <FaFolder size={24} className="technical-details-icon" />;
      case "Chat Functionality":
        return <FaComments size={24} className="technical-details-icon" />;
      case "Navigation":
        return <FaCompass size={24} className="technical-details-icon" />;
      case "Input Devices":
        return <FaKeyboard size={24} className="technical-details-icon" />;
      case "Object Interactions":
        return <FaHands size={24} className="technical-details-icon" />;
      case "Level of Detail (LOD)":
        return <FaChartLine size={24} className="technical-details-icon" />;
      case "Physics and Haptics":
        return <FaCogs size={24} className="technical-details-icon" />;
      default:
        return null;
    }
  };

  const renderTechnicalDetails = () => {
    return technicalDetails.map((item, index) => {
      const detailsArray = Array.isArray(item.details) ? item.details : [item.details];
      const isExpandable = detailsArray.length >= 1;

      return (
        <Col md="6" key={index} className="technical-details-col">
          <Card className="technical-details-card">
            <CardBody className="technical-details-body" onClick={() => toggleCategory(index)}>
              <div className="technical-details-flex">
                {getIcon(item.category)}
                <CardTitle tag="h5" className="technical-details-title mb-0">
                  {item.category}
                </CardTitle>
                {isExpandable && (
                  <span
                    className="technical-details-chevron"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents the card body click from also toggling
                      toggleCategory(index);
                    }}
                    style={{ float: "right" }}
                  >
                    {openCategory === index ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                )}
              </div>
              <Collapse isOpen={openCategory === index}>
                <CardText className="mt-3">
                  {detailsArray.length === 1 ? (
                    detailsArray[0]
                  ) : (
                    <ul className="technical-details-list">
                      {detailsArray.map((detail, i) => (
                        <li key={i} className="technical-details-item">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardText>
              </Collapse>
            </CardBody>
          </Card>
        </Col>
      );
    });
  };

  return <Row>{renderTechnicalDetails()}</Row>;
};

export default TechnicalDetails;

// TechnicalDetails.js
import React, { useState } from "react";
import { Table, Collapse } from "reactstrap";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const TechnicalDetails = ({ technicalDetails }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const renderTechnicalDetails = () => {
    return technicalDetails.map((item, index) => {
      const isExpandable = Array.isArray(item.details) && item.details.length > 1;
      return (
        <React.Fragment key={index}>
          <tr onClick={() => isExpandable && toggleCategory(index)} style={{ cursor: isExpandable ? "pointer" : "default" }}>
            <td>
              <strong>{item.category}</strong>
            </td>
            <td>
              {Array.isArray(item.details) ? item.details[0] : item.details}
              {isExpandable && (
                <span style={{ float: "right" }}>
                  {openCategory === index ? <FaChevronDown /> : <FaChevronRight />}
                </span>
              )}
            </td>
          </tr>
          {isExpandable && (
            <tr>
              <td colSpan="2">
                <Collapse isOpen={openCategory === index}>
                  <ul>
                    {item.details.slice(1).map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </Collapse>
              </td>
            </tr>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <Table bordered>
      <tbody>
        {renderTechnicalDetails()}
      </tbody>
    </Table>
  );
};

export default TechnicalDetails;

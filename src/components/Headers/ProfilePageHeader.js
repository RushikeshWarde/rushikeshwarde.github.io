import React, { useState, useEffect, useRef } from "react";
import { Container } from "reactstrap";
import profileData from "data/profileData.json"; // Adjust this path according to your structure

function ProfilePageHeader() {
  const [data, setData] = useState(null);
  const pageHeader = useRef(null);

  useEffect(() => {
    setData(profileData);
    
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        if (pageHeader.current) { // Check if pageHeader.current is not null
          let windowScrollTop = window.pageYOffset / 3;
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        }
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-header page-header-small">
      <div
        className="pg-header-img"
        style={{
          backgroundImage: `url(${require(`assets/img/${data.backgroundImage}`)})`,
        }}
        ref={pageHeader} // Assign the ref to this div
      ></div>
    </div>
  );
}

export default ProfilePageHeader;

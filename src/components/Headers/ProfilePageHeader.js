import React from "react";

// reactstrap components
import { Button, Container,UncontrolledTooltip } from "reactstrap";

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img class="rounded-circle img-raised" alt="..." src={require("assets/img/li-pfp.jpeg")}></img>
          </div>
          <h2 className="title">Rushikesh Warde</h2>
          <h3 className="category">VR Developer</h3>
          <div className="text-center">
              <Button
                className="btn-round btn-icon"
                color="info"
                id="tooltip-linkedin"
                target="_blank"
                size="lg"
                href="https://www.linkedin.com/in/rushikesh-warde/"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="#tooltip-linkedin">
                Connect with me on Linkedin
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="info"
                id="tooltip-youtube"
                size="lg"
                href="https://www.youtube.com/@RW_Soft"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fab fa-youtube"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="#tooltip-youtube">
                Subscribe to my YouTube channel
              </UncontrolledTooltip>
            </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;

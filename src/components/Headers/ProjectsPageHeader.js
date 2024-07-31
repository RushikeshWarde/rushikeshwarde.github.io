import React from "react";

// reactstrap components
import { Button, Container,UncontrolledTooltip } from "reactstrap";

// core components

function ProjectsPageHeader() {
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
      <div className="page-header page-header-small">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" />
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg-vr.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">VR Development Showcase</h1>
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
      </div>
    </>
  );
}

export default ProjectsPageHeader;

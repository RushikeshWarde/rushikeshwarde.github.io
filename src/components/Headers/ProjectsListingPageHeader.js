import React from "react";
import { Container } from "reactstrap";

function ProjectsListingPageHeader({ title, headerImage }) {
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
  }, [pageHeader]);

  return (
    <>
      <div className="page-header page-header-small">
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
          rel="stylesheet"
        />
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + headerImage + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">{title}</h1>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProjectsListingPageHeader;

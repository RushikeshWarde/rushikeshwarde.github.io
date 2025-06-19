import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, } from "reactstrap";

import Carousel from "components/Blog-Carousel";
import VideoEmbed from "components/VideoEmbed";
import KeyFeatures from "components/KeyFeatures";
import TechnicalDetails from "components/TechnicalDetails";
import Navbar from "components/Navbars/BlogNavbar";
import ProjectsPageHeader from "components/Headers/ProjectsPageHeader";
import DefaultFooter from "components/Footers/Footer";
import LoadingSpinner from "components/LoadingSpinner";
import { icons } from "assets/iconImports"; // Import icons

function BlogTemplate({ projectData, projectCategory }) {
  const { projectName } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const project = projectData.find(proj => proj.link === `/${projectCategory}/${projectName}`);
    if (project) {
      import(`data/${project.jsonFile}`)
        .then(module => setData(module.default))
        .catch(err => console.error("Failed to load JSON file:", err));
    }
  }, [projectName, projectData, projectCategory]);

  useEffect(() => {
    if (data) {
      document.title = data.title;
    }
  }, [data]);

  if (!data) {
    return <LoadingSpinner />;
  }

  const getIcon = () => {
    switch (projectCategory) {
      case 'VRProjects':
        return icons["vrProjectIcon"];
      case 'WebProjects':
        return icons["webProjectIcon"];
      case 'ARProjects':
        return icons["arProjectIcon"];
      default:
        return "now-ui-icons objects_globe";
    }
  };
  const getHeaderImage = () => {
    switch (projectCategory) {
      case 'VRProjects':
        return require("assets/img/bg-vr.jpg");
      case 'WebProjects':
        return require("assets/img/bg-web.jpg");
      case 'ARProjects':
        return require("assets/img/bg-ar.jpg");
      default:
        return require("assets/img/bg-vr.jpg");
    }
  };

  return (
    <>
      <Navbar title={data.title} icon={getIcon()} projectCategory={projectCategory} />
      <div className="wrapper">
        <ProjectsPageHeader title={data.title} headerImage={getHeaderImage()} />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="10">
                <br /><br />
                <h2> Project Overview </h2>
                <h5>
                  <p>{data.ProjectOverview}</p>
                </h5>
                <Carousel items={data.carouselItems} />
              </Col>
              <Col className="ml-auto mr-auto text-center" md="10">
                <br /><br /><br />
                <h2>Key Features</h2>
                <KeyFeatures keyFeatures={data.KeyFeatures} />
              </Col>
              <Col className="ml-auto mr-auto text-center" md="10">
                <br /><br /><br />
                <h2>Technical Details</h2>
                <TechnicalDetails technicalDetails={data.TechnicalDetails} />
              </Col>
              <Col className="ml-auto mr-auto text-center" md="10">
                <br /><br />
                <VideoEmbed videoSrc={data.videoUrl} />
                <br /><br />
              </Col>
              <Col className="ml-auto mr-auto text-center" md="10">
                <h5>
                  <p>{data.Conclusion}</p>
                </h5>
                <br /><br />
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default BlogTemplate;

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

//Blog pages
import Tabs from "views/index-sections/Tabs.js";

//Other Custom Pages
import ProfilePage from "views/ProfilePage.js";
import ProjectsListingPage from "views/ProjectsListingPage.js";
import BlogTemplate from "views/blogposts/BlogTemplate.js";
import projectData from "data/projects.json"; // Import the JSON data


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      
      <Route path="/tabs" element={<Tabs />} />
      
      <Route path="/about" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/about" replace />} />
      <Route path="/projects" element={<ProjectsListingPage />} />
      <Route
        path="/projects/:projectName"
        element={
          <BlogTemplate projectData={projectData} />
        }
      />
      {/* Generate routes dynamically based on the JSON data */}
      {/* {projectData.map((project) => (
        <Route
          key={project.id}
          path={project.link}
          element={<BlogTemplate title={project.title} />}
        />
      ))} */}
    </Routes>
  </BrowserRouter>
);

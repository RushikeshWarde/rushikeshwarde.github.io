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
import VRProjectsListingPage from "views/VRProjectsListingPage.js";
import WebProjectsListingPage from "views/WebProjectsListingPage.js";
import ARProjectsListingPage from "views/ARProjectsListingPage.js";
import BlogTemplate from "views/blogposts/BlogTemplate.js";
import VRProjectData from "data/VRProjects.json"; // Import the JSON data
import WebProjectData from "data/WebProjects.json"; // Import the JSON data
import ARProjectData from "data/ARProjects.json"; // Import the JSON data


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      
      <Route path="/tabs" element={<Tabs />} />
      
      <Route path="/about" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/about" replace />} />
      <Route path="/vrProjects" element={<VRProjectsListingPage />} />
      <Route path="/webProjects" element={<WebProjectsListingPage />} />
      <Route path="/arProjects" element={<ARProjectsListingPage />} />
      <Route
        path="/vrProjects/:projectName"
        element={
          <BlogTemplate projectData={VRProjectData} />
        }
      />
      <Route
        path="/webProjects/:projectName"
        element={
          <BlogTemplate projectData={WebProjectData} />
        }
      />
      <Route
        path="/arProjects/:projectName"
        element={
          <BlogTemplate projectData={ARProjectData} />
        }
      />
    </Routes>
    
  </BrowserRouter>
);

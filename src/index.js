import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/css/global.css";

import Tabs from "components/Tabs-Project-Listing";
import ProfilePage from "views/ProfilePage";
import VRProjectsListingPage from "views/VRProjectsListingPage";
import WebProjectsListingPage from "views/WebProjectsListingPage";
import ARProjectsListingPage from "views/ARProjectsListingPage";
import BlogTemplate from "views/BlogTemplate";

import VRProjectData from "data/VRProjects.json";
import WebProjectData from "data/WebProjects.json";
import ARProjectData from "data/ARProjects.json";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/tabs" element={<Tabs />} />
      <Route path="/about" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/about" replace />} />
      <Route path="/VRProjects" element={<VRProjectsListingPage />} />
      <Route path="/WebProjects" element={<WebProjectsListingPage />} />
      <Route path="/ARProjects" element={<ARProjectsListingPage />} />
      <Route
        path="/VRProjects/:projectName"
        element={
          <BlogTemplate projectData={VRProjectData} projectCategory="VRProjects" />
        }
      />
      <Route
        path="/WebProjects/:projectName"
        element={
          <BlogTemplate projectData={WebProjectData} projectCategory="WebProjects" />
        }
      />
      <Route
        path="/ARProjects/:projectName"
        element={
          <BlogTemplate projectData={ARProjectData} projectCategory="ARProjects" />
        }
      />
    </Routes>
  </HashRouter>
);

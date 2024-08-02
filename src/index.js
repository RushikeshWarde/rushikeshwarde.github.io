/*

=========================================================
* Now UI Kit React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2023 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import NucleoIcons from "views/NucleoIcons.js";

//Blog pages
import Blog_VRShootingGame from "views/blogposts/Blog-VR-Shooting-Game.js"
import Blog_AdvancedArchitectureUtility from "views/blogposts/Blog-AdvancedArchitectureUtility.js"
import Blog_FantasyLandVR from "views/blogposts/Blog-FantasyLandVR.js"
import Blog_MultiplayerGame from "views/blogposts/Blog-Multiplayer-Game.js"
import Blog_FirstPersonShooterVR from "views/blogposts/Blog-First-Person-Shooter-VR.js"
import Blog_MuseumTourVR from "views/blogposts/Blog-Museum-Tour-VR.js"
import Blog_InteriorDesignVR from "views/blogposts/Blog-Interior-Design-VR.js"
import Blog_JetEngineAssembly from "views/blogposts/Blog-Jet-Engine-Assembly.js"
import Blog_TriggerApplicationAR from "views/blogposts/Blog-Trigger-Application-AR.js"
import Blog_ReticlePointerVR from "views/blogposts/Blog-Reticle-Pointer-VR.js"

//Other Custom Pages
import ProfilePage from "views/ProfilePage.js";
import ProjectsListingPage from "views/ProjectsListingPage.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/about" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/about" replace />} />
      <Route path="/projects" element={<ProjectsListingPage />} />
      <Route path="/projects/vr-shooting-game" element={<Blog_VRShootingGame />} />
      <Route path="/projects/advanced-architecture-utility" element={<Blog_AdvancedArchitectureUtility />} />
      <Route path="/projects/fantasy-land-vr" element={<Blog_FantasyLandVR />} />
      <Route path="/projects/multiplayer-game" element={<Blog_MultiplayerGame />} />
      <Route path="/projects/first-person-shooter-vr" element={<Blog_FirstPersonShooterVR />} />
      <Route path="/projects/museum-tour-vr" element={<Blog_MuseumTourVR />} />
      <Route path="/projects/interior-design-vr" element={<Blog_InteriorDesignVR />} />
      <Route path="/projects/jet-engine-assembly" element={<Blog_JetEngineAssembly />} />
      <Route path="/projects/trigger-application-ar" element={<Blog_TriggerApplicationAR />} />
      <Route path="/projects/reticle-pointer-vr" element={<Blog_ReticlePointerVR />} />
      
    </Routes>
  </BrowserRouter>
);

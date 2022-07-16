import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ProjectNavBar from "./components/NavBar/ProjectNavBar";
import NotFound from "./components/NotFound";
import ProjectsPage from "./pages/Projects";
import Home from "./pages/Home";
import Layout from "./utils/Layout";

function App() {
  const Project = useLocation();
  let isProject = false;
  if (Project.pathname === "/") {
    isProject = true;
  }

  return (
    <Layout>
      {isProject ? <NavBar /> : <ProjectNavBar />}

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/projects" exact element={<ProjectsPage />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;

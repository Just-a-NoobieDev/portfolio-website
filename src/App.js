import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ProjectNavBar from "./components/NavBar/ProjectNavBar";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Layout from "./utils/Layout";

function App() {
  const Project = useLocation();
  let isProject = true;
  if (Project.pathname === "/projects") {
    isProject = false;
  }

  return (
    <Layout>
      {isProject ? <NavBar /> : <ProjectNavBar />}

      <Routes>
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;

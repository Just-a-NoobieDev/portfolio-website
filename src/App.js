import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ProjectNavBar from "./components/NavBar/ProjectNavBar";
import NotFound from "./components/NotFound";
import ProjectsPage from "./pages/Projects";
import Home from "./pages/Home";
import Layout from "./utils/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(false);

  const Project = useLocation();
  let isProject = false;
  if (Project.pathname === "/") {
    isProject = true;
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen loading={loading} />
      ) : (
        <Layout>
          {isProject ? <NavBar /> : <ProjectNavBar />}

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/projects" exact element={<ProjectsPage />} />
            <Route path="*" exact element={<NotFound />} />
          </Routes>
          <ScrollToTop />
        </Layout>
      )}
    </>
  );
}

export default App;

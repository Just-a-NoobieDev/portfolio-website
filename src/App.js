import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Layout from "./utils/Layout";
import { LoadingScreen } from "./components/LoadingScreen";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound";
import ProjectNavBar from "./components/NavBar/ProjectNavBar";
import ProjectsPage from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";

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
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Layout>
          {isProject ? <NavBar /> : <ProjectNavBar />}

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/projects" exact element={<ProjectsPage />} />
            <Route path="*" exact element={<NotFound />} />
          </Routes>
          <ScrollToTop />
          <Footer />
        </Layout>
      )}
    </>
  );
}

export default App;

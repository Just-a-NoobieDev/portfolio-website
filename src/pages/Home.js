import Hero from "../components/Hero/Hero";
import LandingImage from "../components/LandingImage";
import About from "../components/About/About";
import ProjectSection from "../components/Projects/ProjectSection";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <>
      <Hero />
      <LandingImage />
      <About />
      <ProjectSection />
      <Contact />
    </>
  );
}

export default Home;

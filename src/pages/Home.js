import Hero from "../components/Hero/Hero";
import LandingImage from "../components/LandingImage";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <>
      <Hero />
      <LandingImage />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;

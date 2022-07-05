import Hero from "./components/Hero/Hero";
import Layout from "./utils/Layout";
import Logo from "./utils/Logo";

function App() {
  return (
    <Layout>
      <a href="/">
        <Logo />
      </a>
      <Hero />
    </Layout>
  );
}

export default App;

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import About from "./Sections/About/About";
import Hero from "./Sections/Hero/Hero";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";

const Home = () => {
  return (
        <>
            <NavBar />
            <Hero/>
            <About />
            <Skills />
            <Projects />
            <Footer />
            
        </>
    )
};

export default Home;

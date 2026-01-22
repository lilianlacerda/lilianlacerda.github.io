import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "./Sections/Hero/Hero";
import Projects from "./Sections/Projects/Projects";

const Home = () => {
  return (
        <>
            <NavBar />
            <Hero/>
            <Projects />
            <Footer />
            
        </>
    )
};

export default Home;

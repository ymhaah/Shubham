import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Service";
import Company from "./components/Company";
import Contact from "./components/Contact";

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            {/* <Company /> */}
            <Contact />
        </>
    );
}

export default Home;

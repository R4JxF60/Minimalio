import Navigation from "../components/Navigation";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Background from "../components/Backgound";
import ScrollProvider from "../context/Scroll.context";
import ThemeProvider from "../context/Theme.context";
import Quote from "../components/Quote";
import Hero from "../components/Hero";


import { useEffect, useRef } from "react";

function IndexPage() {
    useEffect(() => {
    
    })

    return (
        <div className="bg-light-gray" data-scroll-container>
                <Hero />
                    <About />
                    <Quote />
                    <Projects />
                    <Skills />
                    <Contact />
                    <Footer />
            </div>
        
    );
}

export default IndexPage;
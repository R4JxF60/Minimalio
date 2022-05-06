import Navigation from "../components/Navigation";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollProvider from "../context/Scroll.context";


import { useEffect, useRef } from "react";

function IndexPage() {
    useEffect(() => {
    
    })

    return (
        <div className="bg-white">
            <div className="w-full sm:h-28 sm:p-0 pl-9 pr-9 fixed h-24 z-20 bg-white">
                <Navigation />
            </div>
            <div className="container mx-auto pl-9 pr-9 sm:p-0 z-0" data-scroll-container>
                <ScrollProvider config={{smooth: true}}>
                <Home />
                <About />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
                </ScrollProvider>
            </div>
        </div>
    );
}

export default IndexPage;
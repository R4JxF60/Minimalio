import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Quote from "../components/Quote";
import Hero from "../components/Hero";

import Head from "next/head";
import { Fragment } from "react";

import { useEffect, useRef } from "react";

function IndexPage() {
    
    return (
        <Fragment>
            <Head>
                <meta name="robots" content="index, follow"></meta>
                <link rel="canonical" href="https://rajithakumara.tk" />
                <title>Rajitha Kumara | Full Stack Web Developer | Freelancer</title>
                <meta name="description" content="Rajitha Kumara is a design minded software engineer focus on building high quality, scalable front end and back end web solutions. And also a nature lover and a photographer." />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest"></link>
            </Head>
            <div className="bg-light-gray" data-scroll-container>
                <Hero />
                <About />
                <Quote />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
            </div>
        </Fragment>
    );
}

export default IndexPage;
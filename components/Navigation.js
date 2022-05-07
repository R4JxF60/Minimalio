import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState, useRef } from "react";


function Navigation() {
    const mobileNav = useRef(null);
    const toggleIcon = useRef(null);

    const [mobileNavStatus, setMobileNavStatus] = useState("hidden");

    const toggleMobileNav = function(event) {
        if(mobileNavStatus === "hidden") {
            document.body.classList.add("overflow-hidden");
            toggleIcon.current.classList.add("rotate-90");
            return setMobileNavStatus("block");
        }
        document.body.classList.remove("overflow-hidden");
        toggleIcon.current.classList.remove("rotate-90");
        return setMobileNavStatus("hidden");
    }

    return (
        <React.Fragment>
            <div className="flex justify-between items-center h-24 sm:h-28 font-merriweather sm:text-xl text-lg font-normal container mx-auto">
                <div className="mr-9">
                    <Link href={"/"}><a>R4JxF60</a></Link>
                </div>
                <div className="flex items-center w-fit">
                    <div className="hidden flex-col sm:block">
                        <a href="#about" className="sm:mr-9">About</a>
                        <a href="#projects" className="sm:mr-9">Projects</a>
                        <a href="#skills" className="sm:mr-9">Skills</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <ThemeToggle />
                     <img src="/images/icons/menu.svg" ref={toggleIcon} alt={"menu icon"} className="sm:hidden block cursor-pointer select-none" onClick={toggleMobileNav}></img>
                </div>
            </div>
            <div className={`bg-white h-screen w-full sm:hidden left-0 top-24 absolute ${mobileNavStatus}`} ref={mobileNav}>
                <div className="flex flex-col items-center justify-evenly h-1/2 font-merriweather text-lg font-normal container mx-auto">
                    <a href="#about" onClick={toggleMobileNav}>About</a>
                    <a href="#projects" onClick={toggleMobileNav}>Projects</a>
                    <a href="#skills" onClick={toggleMobileNav}>Skills</a>
                    <a href="#contact" onClick={toggleMobileNav}>Contact</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navigation;
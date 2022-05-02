import Link from "next/link";
import React from "react";

function Navigation() {
    return (
        <React.Fragment>
            <div className="flex justify-between items-center h-24 sm:h-28 font-merriweather sm:text-xl text-lg font-normal container mx-auto">
                <div className="mr-9">
                    <Link href={"/"}><a>R4JxF60</a></Link>
                </div>
                <div className="h-6 w-6 bg-black sm:hidden block rounded-full"></div>
                <div className="hidden flex-col sm:block">
                    <a href="/about" className="sm:mr-9">About</a>
                    <a href="/Skills" className="sm:mr-9">Skills</a>
                    <a href="/Projects" className="sm:mr-9">Projects</a>
                    <a href="/Contact">Contact</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navigation;
import SocialLinks from "./SocialLinks";
import { useEffect } from "react";
import React from "react"

function Home(props) {
    

    return (

        <section className="flex flex-col justify-between h-[calc(100vh-96px)] w-full absolute text-mid-black top-[136px]" id="home">
                <div className="flex flex-col justify-center h-full w-full mx-auto container pl-9 pr-9 sm:p-0">
                    <h1 className="font-sen font-normal mb-3 sm:text-8xl text-7xl">I'm Rajitha.</h1>
                    <h2 className="font-merriweather font-normal mb-3 text-xl sm:text-2xl">Not A Developer But An Engineer.</h2>
                    <a className="font-merriweather font-normal sm:text-xl border-2 border-solid w-fit sm:pl-6 sm:pr-6 sm:pt-3 sm:pb-3 text-lg pr-5 pl-5 pt-2 pb-2 border-mid-black flex items-center justify-center select-none hover:bg-mid-black hover:text-light-gray cursor-pointer mb-3 ease-in-out duration-200" href="mailto:rajithakumaraprog@gmail.com">Let's talk</a>
                </div>
                <SocialLinks />
        </section>
    );
}

export default Home;
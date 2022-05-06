import SocialLinks from "./SocialLinks";

function Home(props) {
    return (
        <section className="flex flex-col justify-between h-screen" id="home">
            <div className="flex flex-col justify-center h-full">
                <h1 className="font-sen font-normal mb-3 sm:text-8xl text-7xl">RAJITHA KUMARA</h1>
                <h2 className="font-merriweather font-normal mb-3 text-xl sm:text-2xl">Not A Developer But An Engineer.</h2>
                <div className="font-merriweather font-normal sm:text-xl border-2 border-solid w-fit sm:pl-6 sm:pr-6 sm:pt-3 sm:pb-3 text-lg pr-5 pl-5 pt-2 pb-2 border-black flex items-center justify-center select-none hover:bg-black hover:text-white cursor-pointer mb-3">Let's work</div>
            </div>
            <SocialLinks />
        </section>
    );
}

export default Home;
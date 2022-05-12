import Home from "./Home";
import Background from "./Backgound";
import Navigation from "./Navigation";

function Hero(props) {
    return (<section className="relative h-screen">
        <div className="w-full sm:h-28 sm:p-0 pl-9 pr-9 fixed h-24 z-30 bg-light-gray">
            <Navigation />
        </div>
        <Background />
        <Home />
    </section>);
}

export default Hero;
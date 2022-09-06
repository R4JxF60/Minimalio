import Home from "./Home";
import Background from "./Backgound";
import Navigation from "./Navigation";
import Feature from "./Feature";

function Hero(props) {
    return (<section className="relative h-screen">
        <div className="w-full sm:h-28 sm:p-0 pl-9 pr-9 fixed h-24 z-30 bg-light-gray">
            <Feature><div>Hello from Feature!</div></Feature>
            <Navigation />
        </div>
        <Background />
        <Home />
    </section>);
}

export default Hero;
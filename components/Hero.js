import Home from "./Home";
import Background from "./Backgound";
import Navigation from "./Navigation";

import Feature from "./Feature";
import FeatureMessage from "./FeatureMessage";

function Hero(props) {
    return (<section className="relative h-screen">
        <div className="w-full fixed z-30">
            <div className="w-full bg-mid-black h-10">
                <Feature><FeatureMessage /></Feature>
            </div>
            <div className="sm:h-28 sm:p-0 pl-9 pr-9 h-24 bg-light-gray">
                <Navigation />
            </div>
        </div>
        <Background />
        <Home />
    </section>);
}

export default Hero;
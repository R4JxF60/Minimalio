import Navigation from "../components/Navigation";
import Home from "../components/Home";
import About from "../components/About";
import Header from "../components/Header";

function IndexPage() {
    return (
        <div className="bg-white">
            <div className="bg-white w-full sm:h-28 sm:p-0 pl-9 pr-9 fixed h-24 z-10">
                <Navigation />
            </div>
            <div className="container mx-auto pl-9 pr-9 sm:p-0 z-0">
                <Home />
                <About />
            </div>
        </div>
    );
}

export default IndexPage;
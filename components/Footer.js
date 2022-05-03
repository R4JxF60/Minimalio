import Header from "./Header";
import SocialLinks from "./SocialLinks";
import SubHeader from "./SubHeader";

function Footer(props) {
    return (
        <section className="flex justify-between flex-col max-h-fit min-h-[100vh]" id="footer">
            <div className="md:mt-52 mt-32 w-full">
                <Header>Ok then, Bravo6 going dark!</Header>
                <SubHeader>P.S. Design & Develop By Rajitha Kumara.</SubHeader>
                <div className="font-sen font-normal sm:text-8xl text-7xl sm:mt-16 mt-9">: )</div>
            </div>
            <div className="relative">
                <SocialLinks />
            </div>
            
        </section>
    );
}

export default Footer;
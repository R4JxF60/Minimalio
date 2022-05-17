import Header from "./Header";
import SocialLinks from "./SocialLinks";
import SubHeader from "./SubHeader";

function Footer(props) {
    return (
        <section className="mx-auto pl-9 pr-9 sm:p-0 container flex justify-between flex-col max-h-fit min-h-[100vh] text-mid-black" id="footer">
            <div className="md:mt-52 mt-32 w-full">
                <Header>Ok then, Bravo6 going dark!</Header>
                <SubHeader>P.S. Designed & Developed By Rajitha Kumara.</SubHeader>
                <div className="font-lato font-light text-base text-black md:w-[52%] w-full">Contribution to icons used in this website <a className="underline" href="https://iconscout.com/" target="_blank">www.iconscout.com</a> and contribution to illustrator used in <a className="underline" href="#contact" target="_self">Contact</a> section <a className="underline" href="https://undraw.co/" target="_blank">www.undraw.co</a>.</div>
                <div className="font-sen font-normal sm:text-8xl text-7xl sm:mt-16 mt-9">: )</div>
            </div>
            <div className="w-full md:mt-52 mt-32">
                <SocialLinks />
            </div>
            
            
        </section>
    );
}

export default Footer;
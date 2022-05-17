import Header from "./Header";
import Text from "./Text";
import Project from "./Project";

function Projects(props) {
    return (
        <section className="mx-auto pl-9 pr-9 sm:p-0 container max-h-fit min-h-[100vh] w-full flex flex-col text-mid-black" id="projects">
            <div  className="md:mt-52 mt-32">
                <Header>Things I've Built</Header>
                <Text>
                    <Project 
                        tags={["js", "css", "html", "rest",  "spa", "ui/ux"]} 
                        description={"Huddle is developed by a group of four members, including me without using frameworks. The back-end is a restful resource API and the front-end work as a single page application."} 
                        project={"Huddle"}
                        sub={"A social media platform for sport enthusiasts."}
                        contribution={"Implemented auth server, back-end architecture, front-end architecture, front-end framework for spa and UI/UX designs."}
                        src={"/images/projects/huddle.png"}
                        color={"bg-mid-black/50"}
                        logo="hd"
                        alt="huddle project image"
                    />

                    <Project 
                        tags={["js", "nodejs", "electrone", "flux", "ui/ux", "spa"]} 
                        description={"The project is based on Facebook flux architecture and I did this as a learning project to learn the structure of the react. The presenter is a simple presentation application that can present and control the slideshow without uncovering the speaker's notes to the audience. Used electroneJS, vanilla javascript, and nodeJS."} 
                        project={"Presenter"}
                        sub={"Slides presenting application."}    
                        link={"https://github.com/R4JxF60/presenter"}
                        src={"/images/projects/presenter.png"}
                        color={"bg-mid-black/50"}
                        logo="Presenter"
                        alt="presenter project image"
                    />

                    <Project 
                        tags={["php", "jwt", "token"]} 
                        description={"Custom JWT library is a JWT creating, signing, decoding, and verifying library implemented in PHP. The aim is to learn the internal workings of the JWT token management mechanism."} 
                        project={"JWT Custom Library"}
                        sub={"Custom Json Web Token Library Using PHP."}    
                        link={"https://github.com/R4JxF60/JWT_custom_lib"}
                        src={"/images/projects/jwt.png"}
                        color={"bg-mid-black/50"}
                        logo="JWT"
                        alt="JWT custom library project image"
                    />
                </Text>
            </div>
            <div className="w-full h-fit flex justify-center items-center">
            <a href="https://github.com/R4JxF60?tab=repositories" target="_blank" className="font-merriweather block sm:p-4 p-3 hover:bg-mid-black hover:text-light-gray text-mid-black border-2 border-solid border-mid-black text-base w-fit md:mt-7 mt-5">More projects</a>
            </div>
        </section>
    );
}

export default Projects;
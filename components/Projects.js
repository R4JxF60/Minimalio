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
                        description={"Huddle is developed by group of for members including me without using frameworks. Backend is a restfull resource api and the frontend work as a single page application."} 
                        project={"Huddle"}
                        sub={"A social media platform for sport enthusiasts."}
                        contribution={"Implemented auth server, backend architecture, frontend architecture, frontend framework for spa and UI/UX designs."}
                        src={"/images/huddle.png"}
                        color={"bg-orange-500/50"}
                        logo="hd"
                    />

                    <Project 
                        tags={["js", "nodejs", "electrone", "flux", "ui/ux", "spa"]} 
                        description={"Most of the times presenters faced lots of difficuties, when presenting their presentations."} 
                        project={"Presenter"}
                        sub={"Slides presenting application."}    
                        link={"https://google.com"}
                        src={"/images/presenter.png"}
                        color={"bg-mid-black/50"}
                        logo="Presenter"
                    />
                </Text>
            </div>
        </section>
    );
}

export default Projects;
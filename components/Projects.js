import Header from "./Header";
import Text from "./Text";
import Project from "./Project";

function Projects(props) {
    return (
        <section className="max-h-fit min-h-[100vh] w-full flex flex-col" id="projects">
            <div  className="md:mt-52 mt-32">
                <Header>Things I've Built</Header>
                <Text>
                    <Project 
                        tags={["js", "css", "html", "react"]} 
                        description={"Most of the times presenters faced lots of difficuties, when presenting their presentations."} 
                        project={"Presenter"}
                        sub={"Slides presenting application."}    
                        link={"https://google.com"}
                    />
                </Text>
            </div>
        </section>
    );
}

export default Projects;
import Text from "./Text";
import Header from "./Header";
import Skill from "./Skill";


function Skills(props) {

    return (
        <section className="mx-auto pl-9 pr-9 sm:p-0 container md:flex justify-between max-h-fit min-h-[100vh] text-mid-black" id="skills">
            <div className="md:mt-52 mt-32 w-full md:w-[52%]">
                <Header>Skills</Header>
                <Text>
                    <p className="md:mb-7 mb-5">
                        From the beginning of my web development journey, I'm very much interested in single-page applications, stateless APIs, frontend frameworks, web technologies, and especially UI/UX engineering fields.
                    </p>
                    <p className="md:mb-7 mb-5">
                        As a self-learned developer, I created various kinds of learning projects to know ins and outs of web development and you can check them from here.My main field of expertise is in frontend and single-page app development. I also have a good knowledge and a deep understanding of frameworks like React and Next and their internal architectures.
                    </p>
                    <p>
                        And also I have experience in responsive web development, UI/UX designing, HTML5, CSS3, Javascript(ES6+), and Typescript. Addition all these, I have experience in backend development with PHP and NodeJs.
                    </p>
                </Text>
            </div>
            <div className="md:w-[38%] w-full md:mt-[304px] mt-16">
                <div className="mt-12 sm:mt-16">
                    <Skill skill="Frontend" width="w-[85%]"></Skill>
                    <Skill skill="Backend" width="w-[77%]"></Skill>
                    <Skill skill="UI/UX" width="w-[65%]"></Skill>
                    <Skill skill="Javascript" width="w-[80%]"></Skill>
                    <Skill skill="ReactJs" width="w-[78%]"></Skill>
                    <Skill skill="NextJs" width="w-[73%]"></Skill>
                </div>
            </div>
        </section>
    );
}

export default Skills;
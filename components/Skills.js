import Text from "./Text";
import Header from "./Header";


function Skills(props) {
    return (
        <section className="md:flex justify-between max-h-fit min-h-[100vh]" id="skills">
            <div className="md:mt-52 mt-32 w-full md:w-[52%]">
                <Header>Skills</Header>
                <Text>
                    <p className="mb-7">
                        From the beginning of my web development journey, I'm very much interested in single-page applications, stateless APIs, frontend frameworks, web technologies, and especially UI/UX engineering fields.
                    </p>
                    <p className="mb-7">
                        As a self-learned developer, I created various kinds of learning projects to know ins and outs of web development and you can check them from here.My main field of expertise is in frontend and single-page app development. I also have a good knowledge and a deep understanding of frameworks like React and Next and their internal architectures.
                    </p>
                    <p>
                        And also I have experience in responsive web development, UI/UX designing, HTML5, CSS3, Javascript(ES6+), and Typescript. Addition all these, I have experience in backend development with PHP and NodeJs.
                    </p>
                </Text>
            </div>
        </section>
    );
}

export default Skills;
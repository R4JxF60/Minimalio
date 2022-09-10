import Image from "next/image";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Text from "./Text";
import Tag from "./Tag";
import TagBoard from "./TagBoard";

function About(props) {

    return (
        <section className="container mx-auto pl-9 pr-9 sm:p-0 md:flex justify-between  max-h-fit min-h-[100vh] text-mid-black" id="about">
            <div className="md:mt-52 mt-32 md:w-[52%] w-full">
                <Header>About Me</Header>
                <SubHeader>Eccentric Guy With Lonely Life.</SubHeader>
                <Text>
                    <p>Haloo, I'm Rajitha Kumara from the lovely island Sri Lanka. For the past three years, I have been studying computer science as my major at the University of Colombo School of Computing. As an engineer my field of expertise at front-end and back-end web development. Also, I'm very much interested in product design and UI/UX design fields. In addition to all this stuff, I love backpacking and photography. Especially, I am a huge fan of rain.</p>
                </Text>
            </div>
            <div className="md:w-[38%] w-full md:mt-80 mt-16">
                <TagBoard tags={["nature", "mothernature", "rainlovers", "greenearth", "letsprotectournature", "coding", "backpacking", "travelling", "photography", "adventure", "lovelysrilanka"]} prefix="about"/>
                <div className="md:mt-16 mt-9 mb-9">
                    <div className="overflow-hidden h-40 w-40 block relative" title="Rajitha Kumara">
                        <Image 
                            src={"/images/rajitha.png"} 
                            width={2040}
                            height={2040}
                            layout={"intrinsic"}
                            className="hover:scale-125 ease-in-out duration-200"
                            alt="Rajitha Kumara"
                        ></Image>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
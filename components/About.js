import Image from "next/image";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Text from "./Text";
import Tag from "./Tag";

function About() {
    return (
        <section className="md:flex justify-between  max-h-fit min-h-[100vh]" id="about">
            <div className="md:mt-52 mt-32 md:w-[52%] w-full">
                <Header>About Me</Header>
                <SubHeader>Eccentric Guy With Lonely Life.</SubHeader>
                <Text>
                    <p>Haloo, I'm Rajitha Kumara from lovely island Sri Lanka. For the past three years I have been studying computer science as my major in University of Colombo School of Computing. As an engineer my field of expertise at full stack web development and mobile app development. Also I'm very much interesting at product design and UI/UX desing fields. Addition to all these stuffs, I love backpacking and photography. Specially, I am a huge rain lover.</p>
                </Text>
            </div>
            <div className="md:w-[38%] w-full md:mt-80 mt-16">
                <div className="flex flex-wrap h-fit w-full">
                    <Tag tag="nature" />
                    <Tag tag="mothernature"/>
                    <Tag tag="rainlovers" />
                    <Tag tag="greenearth" />
                    <Tag tag="letsprotectournature" />
                    <Tag tag="rainlovers" />
                    <Tag tag="greenearth" />
                    <Tag tag="letsprotectournature" />
                </div>
                <div className="md:mt-16 mt-9">
                    <div className="overflow-hidden bg-gray-300 h-40 w-40 block relative">
                        <Image 
                            src={"/images/me.png"} 
                            width={2040}
                            height={2040}
                            layout={"intrinsic"}
                        ></Image>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
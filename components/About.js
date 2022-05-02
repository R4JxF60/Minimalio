import Image from "next/image";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Text from "./Text";
import Tag from "./Tag";

function About() {
    return (
        <section className="md:flex justify-between h-screen min-h-[40vh]">
            <div className="md:mt-52 mt-32 md:w-2/5 w-full">
                <Header>About Me</Header>
                <SubHeader>Eccentric Guy With Lonely Life.</SubHeader>
                <Text>
                    Haloo, I'm Rajitha Kumara from lovely island Sri Lanka. For the past three years I have been studying computer science as my major in University of Colombo School of Computing. As an engineer my field of expertise at full stack web development and mobile app development. Also I'm very much interesting at product design and UI/UX desing fields. Addition to all these stuffs, I love backpacking and photography. Specially, I am a huge rain lover.
                </Text>
            </div>
            <div className="md:w-2/5 w-full md:mt-80 mt-16">
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
                <div>
                    <div className="rounded-full overflow-hidden w-64 h-64">
                        <Image 
                            src={"/images/me.jpg"}
                            width={406}
                            height={305}
                            layout="intrinsic"
                            alt={"picture of Rajitha Kumara"}
                        ></Image>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
import React from "react";
import Image from "next/image";

function Project(props) {
    const tags = props.tags;
    const tagItems = tags.map(tag => {
        const formattedTag = tag.toString().replaceAll(/[ +]/g, '').toLowerCase();
        return <div key={formattedTag} className="w-fit h-fit mr-3 md:mr-4 font-lato font-normal text-lg md:text-xl">#{formattedTag}</div>
    });

    const createDescription = (subheading, description) => {
        return <React.Fragment><h3 className="font-merriweather font-normal md:text-2xl text-xl mb-2">{props.sub || "Project Subheading"}</h3><p className="font-lato font-normal text-lg md:text-xl mb-3">{props.description || "Description"}</p></React.Fragment>;
    } 

    return (
        <div className="md:flex flex-row block mb-16">
            <div className="w-full h-auto md:w-[454px] md:h-[454px] md:mr-12 overflow-hidden relative">
                <div className={"w-full h-full absolute z-10 flex items-center justify-center "+props.color}>
                    <div className={`font-sen text-${props.color}-500 sm:text-5xl text-3xl bg-white rounded-full h-fit w-fit sm:p-8 p-5`}>hd</div>
                </div>
                <Image 
                    src={props.src} 
                    width={454}
                    height={454}
                    layout={"responsive"}
                    alt={props.alt}
                    className="blur-md"
                ></Image>
            </div>
            <div className="md:w-[55%] w-full">
                <div className="flex flex-wrap mb-3 md:mt-0 mt-3">{tagItems}</div>
                <h2 className="font-merriweather font-normal md:text-4xl text-3xl mb-1">{props.project || "Project"}</h2>
                {createDescription(props.sub)}
                {(props.contribution)? createDescription("Contribution", props.contribution) : null}
                {(props.link)? <a href={props.link} target="_blank" className="cursor-pointer"><img src="/images/icons/link.svg" title={props.project} alt={props.project+" link"}></img></a> : null}
            </div>
        </div>
    );
}

export default Project;
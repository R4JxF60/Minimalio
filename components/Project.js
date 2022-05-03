import React from "react";

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
        <div className="md:flex flex-row block">
            <div className="bg-gray-300 w-full h-[500px] md:w-[454px] md:h-[454px] md:mr-12">
                
            </div>
            <div>
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
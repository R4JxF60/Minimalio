function Skill(props) {
    return (
        <div className="sm:mb-4 mb-2 text-mid-black">
            <div className="w-fit h-fit font-lato font-normal sm:text-xl text-lg">{ props.skill || "Skill"}</div>
            <div className="skills">
                <div className={"h-2 bg-mid-black "+props.width}></div>
            </div>
        </div>
    );
}

export default Skill;
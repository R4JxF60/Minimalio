function Skill(props) {
    return (
        <div className="sm:mb-4 mb-2">
            <div className="w-fit h-fit font-lato font-normal sm:text-xl text-lg">{ props.skill || "Skill"}</div>
            <div className={"h-2 bg-black "+props.width}></div>
        </div>
    );
}

export default Skill;
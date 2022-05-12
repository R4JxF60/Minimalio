function SubHeader(props) {
    return (
        <h2 className="font-merriweather font-normal mb-3 text-xl sm:text-2xl text-mid-black">
            {props.children || "Sub Heading"}
        </h2>
    );
}

export default SubHeader;
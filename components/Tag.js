function Tag(props) {
    // +((props.tag)? props.tag.replaceAll(/[ +]/g, ""):
    return (
        <div className="mr-4 mb-4 bg-gray-400 p-2 w-fit h-fit font-lato font-normal sm:text-xl text-lg">
            {"#"+props.tag || "tag"}
        </div>
    );
}

export default Tag;
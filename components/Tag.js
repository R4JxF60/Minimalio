import { useId } from "react";


function Tag(props) {

    const id = useId();

    
    return (
        <div className="mr-4 mb-4 p-2 w-fit h-fit font-lato font-normal sm:text-xl text-lg border border-solid border-mid-black text-mid-black overflow-hidden">
            <div className="tags">
                {"#"+((props.tag)? props.tag: "tag")}
            </div>
        </div>
    );
}

export default Tag;
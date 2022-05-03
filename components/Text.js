function Text(props) {
    return (
        <div className="font-lato sm:text-xl text-lg font-normal sm:mt-16 mt-12">
            {props.children || "Text Content"}
        </div>
    );
}

export default Text;
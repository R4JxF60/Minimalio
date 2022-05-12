function Header(props) {
    console.log(props);
    return (
        <h1 className="font-sen font-normal sm:text-8xl text-7xl mb-3 text-mid-black">
            {props.children || "Heading"}
        </h1>
    );
}

export default Header;
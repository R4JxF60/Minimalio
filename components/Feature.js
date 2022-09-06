function Feature({children, className}) {
    return(
    <div className= {`${className || ''} h-full flex items-center justify-center`}>
        {children}
    </div>);
};

export default Feature;
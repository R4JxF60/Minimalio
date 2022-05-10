import text from "../public/assets/background.text"

function Background(props) {
    const words = text.split(/[' ']+/);

    const animate = () => {
    }

    return (<div className="max-h-fit min-h-[100vh] h-screen absolute z-0 w-full overflow-hidden">
        <div className="font-calling text-3xl text-slate-200 rotate-90 p-4 text-center">{words}</div>
    </div>);
}

export default Background;
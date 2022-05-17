import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function Background(props) {

    const particlesInit = async (main) => {
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        
      };
    

    return (<div className="h-screen absolute z-0 w-full overflow-hidden">
            <div className="relative w-full h-full">
                <div id="tsparticles">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    canvasClassName="particleCanvas"
                    style={{position: "absolute !important"}}
                    options={{
                        background: {
                        color: {
                            value: "#f8f8fa",
                        },
                        },
                        fpsLimit: 120,
                        interactivity: {
                        events: {
                            onHover: {
                            enable: true,
                            mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                            quantity: 2,
                            },
                            repulse: {
                            distance: 100,
                            duration: 0.4,
                            },
                        },
                        },
                        particles: {
                        color: {
                            value: "#1e1f26",
                        },
                        links: {
                            color: "#262D35",
                            distance: 230,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: false,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                            default: "bounce",
                            },
                            random: true,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                            enable: true,
                            area: 250,
                            },
                            value: 6,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                        },
                        detectRetina: true,
                        fullScreen: {
                            enable: false,
                        }
                    }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Background;
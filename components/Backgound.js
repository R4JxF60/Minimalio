import { useRef, useEffect, useState } from "react";
import { ThemeContext } from "../context/Theme.context";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function Background(props) {

    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
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
                            value: "#000000",
                        },
                        links: {
                            color: "#555555",
                            distance: 200,
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
                            value: 10,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
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
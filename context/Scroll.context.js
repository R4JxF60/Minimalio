import { useEffect, createContext, useState } from "react";

const ScrollContext = createContext({
    scroll: false
});

export default function ScrollProvider({children, config}) {

    const [scroll, setScroll] = useState(null);

    useEffect(() => {
        if(!scroll) {
            (async () => {
                try {
                    const LocomotiveScroll = (await import('locomotive-scroll')).default;
                    setScroll( new LocomotiveScroll({
                        el: document.querySelector("[data-scroll-container]") ?? undefined,
                        ...config
                    }));
                }catch(error) {
                    throw Error(`[ScrollProvider]: ${error}`);
                }
            })();
        }
        return () => { scroll && scroll.destroy() };
    }, [scroll])

    return <ScrollContext.Provider value={ { scroll }}>{children}</ScrollContext.Provider>;
}

ScrollContext.displayName = "ScrollContext";
ScrollProvider.displayName = "ScrollProvider";
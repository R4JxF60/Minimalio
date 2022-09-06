import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
    light: true,
    toggleTheme: () => {}
});

// comment
export default function ThemeProvider({children}) {
    
    const [light, setLight] = useState(true);

    function toggleTheme() {
        setLight(!light);
    }

    return (
        <ThemeContext.Provider value={{ light: light, toggleTheme:toggleTheme}}>{children}</ThemeContext.Provider>
    );
}

ThemeContext.displayName = "ThemeContext";
ThemeProvider.displayName = "ThemeProvider";
import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ThemeToggle extends React.Component {
    static contextType = ThemeContext;

    render() { 
        const { toggleTheme } = this.context;
        return (
            <button onClick={toggleTheme} style={{padding: "8px", border: "none", borderRadius:"5px" }}>Toggle Theme</button>
        );
    }
}
 
export default ThemeToggle;
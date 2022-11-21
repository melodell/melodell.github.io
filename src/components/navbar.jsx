import React from "react"

const Navbar = ({ darkMode, modeChangeHandler }) => (
    <div className={`ui ${darkMode ? "inverted" : ""} fixed huge menu`} style={{borderBottom: "1px solid rgba(255,255,255,.08)"}}>
        <a className="borderless item"
                data-tooltip="Switch to light mode" 
                data-position="bottom left"
                data-variation="basic"
                onClick={modeChangeHandler}>
            <i className="moon icon"></i>
        </a>
        <div className="right menu">
            <a href="src/assets/Resume_Melina_ODell.pdf" download 
                className="item" 
                data-tooltip="Download my resume" 
                data-position="bottom right"
                data-variation="basic">
                    Resume
            </a>
            <a href="#contact" 
                className="item"
                data-tooltip="Contact me" 
                data-position="bottom right"
                data-variation="basic">
                    Contact
            </a>
        </div>
    </div>
)

export default Navbar;
import React from "react";
import PropTypes from "prop-types";

const menuStyle = {
    border: "0px",
    borderBottom: "1px solid rgba(255,255,255,.08)"
}

const Navbar = ({ darkMode, modeChangeHandler, resumeLink }) => (
    <div className={`ui ${darkMode ? "inverted" : ""} fixed huge menu`} style={menuStyle}>
        <a className="borderless item"
                data-tooltip={`Switch to ${darkMode ? "light" : "dark"} mode`} 
                data-position="bottom left"
                data-variation="basic"
                onClick={modeChangeHandler}>
            <i className={`fitted ${darkMode ? "moon" : "sun"} icon`}></i>
        </a>
        <div className="right menu">
            <a href={resumeLink} target="_blank" 
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

Navbar.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    modeChangeHandler: PropTypes.func.isRequired,
    resumeLink: PropTypes.string.isRequired
}
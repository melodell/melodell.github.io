import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const bioStyles = {
    padding: '10px 0 10px 0'
}

const fontStyle = {fontSize: '16px'}

const copyText = (text) => {navigator.clipboard.writeText(text);}

const Bio = ({ darkMode }) => (
    <div className={`ui ${darkMode ? "inverted" : ""} two column stackable grid container`} style={bioStyles}>
        <div className="center aligned column">
            <StaticImage 
                src="../assets/melodell.jpg"
                alt="Melina O'Dell headshot"
                className="ui medium image"
            />
        </div>
        <div className="column">
            <h1>Melina O'Dell</h1>
            {/* <p>Makin' websitez</p> */}
            <p style={fontStyle}>Melina is a senior at the University of Michigan in Ann Arbor, majoring in Computer Science. 
                She intends to pursue a Master's degree in Computer Science Engineering through Michigan's SUGS program.
            </p>
            <p style={fontStyle}>She is passionate about full-stack web development, supporting women in STEM, teaching, and perpetual learning.</p>
            <br/>
            <div className="ui center aligned container">
                <div className="ui small stackable buttons">
                    <a className="ui envelope button"
                        onClick={() => copyText("melodell@umich.edu")}
                        data-tooltip="Copy melodell@umich.edu to clipboard">
                        <i className="envelope icon"></i>
                        Email
                    </a>
                    <a className="ui linkedin button"
                        href="https://www.linkedin.com/in/melina-odell/"
                        target="_blank"
                        data-tooltip="Visit my LinkedIn">
                        <i className="linkedin icon"></i>
                        LinkedIn
                    </a>
                    <a className={`ui github ${darkMode ? "inverted" : "black"} button`}
                        href="https://github.com/melodell"
                        target="_blank"
                        data-tooltip="Visit my GitHub">
                        <i className="github icon"></i>
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default Bio;
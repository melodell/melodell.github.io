import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const bioStyles = {
    padding: '10px 0 10px 0'
}

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
            <div className="ui container">
                <p>Melina is a senior at the University of Michigan in Ann Arbor, majoring in Computer Science. 
                    She intends to pursue a Master's degree in Computer Science Engineering through Michigan's SUGS program.
                </p>
                <p>She is passionate about full-stack web development, supporting women in STEM, teaching, and perpetual learning.</p>
            </div>
        </div>
    </div>
);

export default Bio;
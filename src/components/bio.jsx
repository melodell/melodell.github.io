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
            <p>Makin' websitez</p>
        </div>
    </div>
);

export default Bio;
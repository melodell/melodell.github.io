import React from "react";

const cardStyles = {
    padding: "2px",
    paddingBottom: "30px"
}

const ProjectCard = ({ darkMode, data }) => (
    <a className={`ui ${darkMode ? "inverted" : ""} card`} href={data.url} target="_blank" style={cardStyles}>
        <div className="content">
            <div className="header">{data.title}</div>
            <div className="description">{data.description}</div>
            <div className={`ui bottom attached ${data.labelColor} label`}>{data.label}</div>
        </div>
    </a>
);

export default ProjectCard;
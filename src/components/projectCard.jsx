import React from "react";

const cardStyles = {
    padding: "2px"
}

const ProjectCard = ({ darkMode, data }) => (
    <a className={`ui ${darkMode ? "inverted" : ""} card`} href={data.url} target="_blank" style={cardStyles}>
        <div className="content">
            <div className="header">{data.title}</div>
            <div className="description">{data.description}</div>
            <div className={`ui bottom attached ${data.labelColor} label`}>{data.label}</div>
            <div className={`ui right floating icon label`}>
                <i className="black github icon"></i>
            </div>
        </div>
        <div className="extra content" style={{paddingBottom: "45px"}}>
            {data.tech.map((t, i) => (
                <span>{t}{i !== data.tech.length - 1 ? " | " : ""}</span>
            ))}
        </div>
    </a>
);

export default ProjectCard;
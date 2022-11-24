import React from "react";
import ProjectCard from "./projectCard";
import data from "../data/projects.json"

const projStyles = {
    padding: "0 0 10px 0",
    textAlign: "center",
    width: "85%",
    margin: "0 auto"
}

const Projects = ({ darkMode }) => (
    <div className={`ui ${darkMode ? "inverted" : ""} container`} style={projStyles}>
        <h2>Projects</h2>
        <div className="ui centered stackable cards" style={{margin: "10px 0 0 0"}}>
            {data.map((p) => (
                <ProjectCard key={data.title} darkMode={darkMode} data={p}/>
            ))}
        </div>
    </div>
);

export default Projects;
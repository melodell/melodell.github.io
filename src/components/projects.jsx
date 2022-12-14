import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./projectCard";
import data from "../data/projects.json";

const projStyles = {
    padding: "0 0 10px 0",
    textAlign: "center",
    width: "85%",
    margin: "0 auto"
}

const Projects = ({ darkMode }) => (
    <div className={`ui ${darkMode ? "inverted" : ""} container`} style={projStyles}>
        <h2>Projects</h2>
        <div className="ui two centered stackable cards" style={{margin: "10px 0 0 0"}}>
            {data.map((p, i) => (
                <ProjectCard key={i} darkMode={darkMode} data={p}/>
            ))}
        </div>
    </div>
);

export default Projects;

Projects.propTypes = {
    darkMode: PropTypes.bool.isRequired
}
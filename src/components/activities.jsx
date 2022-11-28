import React from "react";
import PropTypes from "prop-types";
import ActivityCard from "./ActivityCard";
import data from "../data/activities.json";

const activityStyles = {
    padding: "0 0 10px 0",
    textAlign: "center",
    width: "85%",
    margin: "0 auto"
}

const englishNumbers = {1: "one", 2: "two", 3: "three", 4: "four", 5: "five"}

const Activities = ({ darkMode }) => (
    <div className={`ui ${darkMode ? "inverted" : ""} container`} style={activityStyles}>
        <h2>What Am I Up To?</h2>
        <div className={`ui ${englishNumbers[data.length]} centered stackable cards`} style={{margin: "10px 0 0 0"}}>
            {data.map((a, i) => (
                <ActivityCard key={i} darkMode={darkMode} data={a}/>
            ))}
        </div>
    </div>
);

export default Activities;

Activities.propTypes = {
    darkMode: PropTypes.bool.isRequired
}
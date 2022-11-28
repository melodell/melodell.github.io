import React from "react";
import PropTypes from "prop-types";

const Activities = ({ darkMode }) => (
    <div className={`ui ${darkMode ? "inverted" : ""} container`}>
        Activities here!
    </div>
);

export default Activities;

Activities.propTypes = {
    darkMode: PropTypes.bool.isRequired
}
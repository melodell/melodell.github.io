import React from "react";
import PropTypes from "prop-types";

const cardStyles = {
    padding: "2px"
}

const ActivityCard = ({ darkMode, data }) => (
    <div className={`ui ${darkMode ? "inverted" : ""} card`} style={cardStyles}>
        <div className="content">
            <div className="header">{data.title}</div>
            <div className="description">{data.description}</div>
        </div>
    </div>
);

export default ActivityCard;

    ActivityCard.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired
}
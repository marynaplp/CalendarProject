import React from "react";

const TodayButton = ({ onClick }) => {
    return (
      <button className="today-btn" onClick={onClick}>
     Today
      </button>
    );
};

export default TodayButton;
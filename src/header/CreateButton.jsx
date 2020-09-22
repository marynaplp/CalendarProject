import React from "react";
import moment from "moment";

const CreateButton = ({ showModalForm }) => {
  const todayDate = moment().format("YYYY-MM-DD");
  return (
    <button
      className="create-event-btn"
      onClick={() => showModalForm(todayDate, "09:00", "10:00")}>
  Create 
  </button>
  );
};

export default CreateButton;

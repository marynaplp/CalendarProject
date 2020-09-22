import React from "react";
import CreateButton from "./CreateButton";
import TodayButton from "./TodayButton";
import WeekDays from "./WeekDays";
import { getCurrentDate } from "../utilities/utilities";
import "./header.scss";

const Header = ({ showModalForm,currentWeek, addDay }) => {
    const currentData = getCurrentDate(addDay);

    return (
      <div className="header">
        <div className="navigation">
          <CreateButton showModalForm={showModalForm} />
          <TodayButton onClick={currentWeek} />
          <div className="displayed-month">{currentData}</div>
        </div>
        <WeekDays addDay={addDay} />
      </div>
    );
};

export default Header;
import React from "react";
import { generateNumbersRange } from "../utilities/utilities.js";
import moment from "moment";

const WeekDays = ({ addDay }) => {
    let currentDay = addDay;

    const weekDays = generateNumbersRange(0, 6).map(li => {
        const startOfWeek = moment()
            .startOf("isoWeek")
            .add(currentDay, "day");

        let tagCurrentDay;
        let tagCurrentDayName;

        if (moment().format("DD.MM.YY") === startOfWeek.format("DD.MM.YY")) {
            tagCurrentDay = "calendar__day-number__current";
            tagCurrentDayName = "calendar__day-name__current";
        } else {
            tagCurrentDay = "calendar__day-number";
            tagCurrentDayName = "calendar__day-name";
        }

        currentDay++;

        return (
            <li key={li} className="calendar__day-label">
                <span className={tagCurrentDayName}>{startOfWeek.format("ddd")}</span>
                <span className={tagCurrentDay}>{startOfWeek.format("DD")}</span>
            </li>
        );
    });

    return <ul className="week">{weekDays}</ul>;
};

export default WeekDays;

import React from "react";
import { generateNumbersRange } from "../utilities/utilities.js";

const TimesDay = () => {
    const timesBlock = generateNumbersRange(1, 23).map(arg => {
        const correctTime = `0${arg}`;

        return (
            <div key={arg} className="time__day-hour">{`${correctTime.slice(
                -2
            )}:00`}</div>
        );
    });
    return <div className="time__day">{timesBlock}</div>;
};

export default TimesDay;
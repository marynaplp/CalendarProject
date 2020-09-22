import React from "react";
import { generateNumbersRange } from "../utilities/utilities.js";
import Hours from "./Hours";
import Redline from "./RedLine";
import moment from "moment";

const Days = ({
    dayId,
    showModalForm,
    events,
    showEventData,
    dateEvent,
    blink
    
}) => {
    let forHourId = dayId;
    const day = generateNumbersRange(0, 6).map(arg => {
        let hourId = moment()
          .startOf("isoWeek")
          .add(forHourId, "day")
          .format("YYYY-MM-DD");
        forHourId++;

        const redline =
        hourId === moment().format("YYYY-MM-DD") ? <Redline /> : null;

        return (
          <div key={arg} className="calendar__day">
            {redline}
            <Hours
              hourId={hourId}
              events={events}
              showModalForm={showModalForm}
              dateEvent={dateEvent}
              showEventData={showEventData}
              blink={blink}
            />
          </div>
        );
    });

    return day;
};

export default Days;

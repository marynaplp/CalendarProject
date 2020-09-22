import React from "react";
import { generateNumbersRange } from "../utilities/utilities.js";
import moment from "moment";

const Hours = ({ hourId, events, showModalForm, showEventData, blink }) => {
    let forHourId = hourId; //YYYY-MM-DD
    const hours = generateNumbersRange(0, 23).map(arg => {
        const hour = `0${arg}`.slice(-2);
        const nextHour = `0${arg + 1}`.slice(-2);
        const id = `${forHourId}-${hour}`;

        let findedEvent = events.find(
            event => event.startEvent.slice(0, -3) === id
        );

        let event;
        if (findedEvent) {
            let blinkData = findedEvent.startEvent;
            const marginTopEvent = `${findedEvent.startEvent.slice(-2)}px`;
            let endHour = moment(findedEvent.endTimeEvent, "HH:mm").format("HH");

            if (endHour === "00") endHour = 24;
            const startHour = moment(findedEvent.timeEvent, "HH:mm").format("HH");
            const endMinutes = +findedEvent.endTimeEvent.slice(-2);
            const startMinutes = +findedEvent.timeEvent.slice(-2);

            const heightEvent = `${endHour * 60 -
                startHour * 60 +
                endMinutes -
                startMinutes}px`;

            const classEvent = blink === blinkData ? "event blink1" : "event";

            event = (
                <div
                    className={classEvent}
                    style={{ marginTop: `${marginTopEvent}`, height: `${heightEvent}` }}
                    onClick={e => showEventData(e, findedEvent)}
                >
                    <span>{findedEvent.nameEvent}</span>
                    <span>
                        {findedEvent.timeEvent} - {findedEvent.endTimeEvent}
                    </span>
                </div>
            );
        }

        return (
          <div
            key={arg}
            className="calendar__hour"
            onClick={() =>
              showModalForm(forHourId, `${hour}:00`, `${nextHour}:00`)
            }
          >
            {event}
          </div>
        );
    });
    return hours;
};

export default Hours;
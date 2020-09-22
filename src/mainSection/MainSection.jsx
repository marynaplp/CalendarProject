import React from "react";
import TimesDay from "./TimesDay";
import Days from "./Days";
import "./mainSection.scss";

const MainSection = ({
    showModalForm,
    setDateBlock,
    events,
    showEventData,
    dateEvent,
    blink
}) => {
    return (
      <section className="calendar__body">
        <div className="calendar__sidebar">
          <div className="time">
            <TimesDay />
          </div>
          <Days
            dayId={setDateBlock}
            showModalForm={showModalForm}
            events={events}
            dateEvent={dateEvent}
            showEventData={showEventData}
            blink={blink}
          />
        </div>
      </section>
    );
};

export default MainSection;

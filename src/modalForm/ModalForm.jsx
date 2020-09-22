import React from "react";
import Form from "./Form";
import "./modalForm.scss";

const ModalForm = ({
    dateEvent,
    timeEvent,
    endDateEvent,
    endTimeEvent,
    handleSubmit,
    deleteEvent,
    hideModalForm,
    nameEvent,
    descriptionEvent,
    isEvent
}) => {
    return (
      <div className="create-event">
        <button className="create-event__close-btn" onClick={hideModalForm}>
          CLOSE
        </button>
        <Form
          dateEvent={dateEvent}
          timeEvent={timeEvent}
          endTimeEvent={endTimeEvent}
          endDateEvent={endDateEvent}
          handleSubmit={handleSubmit}
          deleteEvent={deleteEvent}
          isEvent={isEvent}
          nameEvent={nameEvent}
          descriptionEvent={descriptionEvent}
        />
        <button
          className={`delete-event   ${!isEvent && "delete-event__off"}`}
          onClick={deleteEvent}
        >
          <i className="delete">DELETE</i>
        </button>
      </div>
    );
};

export default ModalForm;
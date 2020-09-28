import React, { Component } from "react";
import Header from "./header/Header";
import MainSection from "./mainSection/MainSection";
import ModalForm from "./modalForm/ModalForm";

import {
    createEvent,
    fetchEvents,
    removeEvent
} from "./http_request/Gateway.js";

class Calendar extends Component {
    state = {
       diffDate: 0,
        removeEventData: "",
        isEvent: false,
        blink: "",
        events: [],
        popupData: false
    };

    handleNextWeek = () => {
        this.setState({
            diffDate: this.state.diffDate + 7
        });
    };

    handlePrevWeek = () => {
        this.setState({
            diffDate: this.state.diffDate - 7
        });
    };

    handleCurrentWeek = () => {
        this.setState({
            diffDate: 0
        });
    };

    handleHideModalForm = () => {
        this.setState({
            blink: "",
            popupData: false
        });
    };

    handleShowModalForm = (dateStart, timeEvent, endTimeEvent) => {
        this.setState({
            popupData: {
                dateEvent: dateStart,
                endDateEvent: dateStart,
                timeEvent,
                endTimeEvent,
                descriptionEvent: "",
                nameEvent: ""
            },
            isEvent: false,
            blink: ""
        });
    };

    showEventData = (
        e,
        {
            date,
            nameEvent,
            descriptionEvent,
            endDateEvent,
            endTimeEvent,
            dateEvent,
            timeEvent,
            id
        }
    ) => {
        e.stopPropagation();
        this.setState({
            ƒ: true,
            isEvent: true,
            deleteEvent: date,
            popupData: {
                nameEvent,
                descriptionEvent,
                endDateEvent,
                endTimeEvent,
                dateEvent,
                timeEvent,
                id
            },
            deleteEventData: `${dateEvent}-${timeEvent}`,
            blink: "",
            id
        });
    };

    deleteEvent = () => {
        if (this.state.deleteEventData) {
            this.setState({
                deleteEventData: false
            });
            return;
        }
        removeEvent(this.state.id).then(() => {
            fetchEvents().then(events => {
                this.setState({
                    events: events,
                    blink: "",
                    popupData: "",
                    id: null
                });
            });
        });
    };

    componentDidMount() {
        fetchEvents().then(events => {
            this.setState({
                events: events,
                blink: "",
                id: null
            });
        });
    }

    handleSubmit = event => {
      // eslint-disable-next-line 
      if ((event, this.state.events, this.state.deleteEventData)) return;
      let intersect = (event, this.state.events, this.state.deleteEventData);
      if (intersect) {
        this.setState({
          blink: intersect.startEvent,
        });
        return;
      }
      if (this.state.id) {
        this.deleteEvent();
      }
      createEvent(event).then(() => {
        fetchEvents().then((events) => {
          this.setState({
            events: events,
            blink: "",
            popupData: "",
          });
        });
      });
    };

    render() {
        return (
            <div className="calendar">
                <Header
                    nextWeek={this.handleNextWeek}
                    prevWeek={this.handlePrevWeek}
                    currentWeek={this.handleCurrentWeek}
                    addDay={this.state.diffDate}
                    showModalForm={this.handleShowModalForm}
                />
                <MainSection
                    setDateBlock={this.state.diffDate}
                    showModalForm={this.handleShowModalForm}
                    events={this.state.events}
                    showEventData={this.showEventData}
                    blink={this.state.blink}
                />
                {this.state.popupData && (
                    <ModalForm
                        {...this.state.popupData}
                        hideModalForm={this.handleHideModalForm}
                        handleSubmit={this.handleSubmit}
                        deleteEvent={this.deleteEvent}
                        isEvent={this.state.isEvent}
                    />
                )}
            </div>
        );
    }
}

export default Calendar;
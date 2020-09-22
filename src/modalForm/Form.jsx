import React, { Component } from "react";
import { getStartPoint } from "../utilities/utilities.js";
import { getEndPoint } from "../utilities/utilities.js";

class Form extends Component {
  state = {
    nameEvent: "",
    endTimeEvent: "",
    timeEvent: "",
    dateEvent: "",
    descriptionEvent: "",
  };

  componentDidMount() {
    this.setState({
      dateEvent: this.props.dateEvent,
      timeEvent: this.props.timeEvent,
      endTimeEvent: this.props.endTimeEvent,
      endDateEvent: this.props.endDateEvent,
      nameEvent: this.props.nameEvent,
      descriptionEvent: this.props.descriptionEvent,
    });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.dateEvent !== prevProps.dateEvent ||
      this.props.timeEvent !== prevProps.timeEvent ||
      this.props.endTimeEvent !== prevProps.endTimeEvent ||
      this.props.endDateEvent !== prevProps.endDateEvent ||
      this.props.nameEvent !== prevProps.nameEvent ||
      this.props.descriptionEvent !== prevProps.descriptionEvent
    ) {
      const {
        dateEvent,
        timeEvent,
        endTimeEvent,
        endDateEvent,
        nameEvent,
        descriptionEvent,
      } = this.props;
      this.setState({
        dateEvent,
        timeEvent,
        endTimeEvent,
        endDateEvent,
        nameEvent,
        descriptionEvent,
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      nameEvent,
      endDateEvent,
      endTimeEvent,
      timeEvent,
      dateEvent,
      descriptionEvent,
    } = this.state;

    const eventData = {
      nameEvent,
      endDateEvent,
      endTimeEvent,
      timeEvent,
      dateEvent,
      descriptionEvent,
      startEvent: `${this.state.dateEvent}-${this.state.timeEvent}`,
      endEvent: `${this.state.endDateEvent}-${this.state.endTimeEvent}`,
    };
    this.props.handleSubmit(eventData);
  };

  handleChangeFormData = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  clearForm = () => {
    this.setState({
      popupOpen: false,
      startEvent: "",
      nameEvent: "",
      descriptionEvent: "",
      endDateEvent: "",
      endTimeEvent: "",
      dateEvent: "",
      timeEvent: "",
    });
  };

  render() {
    const {
      nameEvent,
      descriptionEvent,
      endTimeEvent,
      timeEvent,
      dateEvent,
    } = this.state;
    const beginTime = getStartPoint();
    const endTime = getEndPoint();
    return (
      <>
        <form className="create-event-form" onSubmit={this.handleSubmit}>
          <input
            name="nameEvent"
            type="text"
            className="create-event-form__field"
            placeholder="Event name"
            value={nameEvent}
            onChange={this.handleChangeFormData}
          />
          <div className="create-event-form__time">
            <input
              name="dateEvent"
              type="date"
              className="date-event begin"
              value={dateEvent}
              onChange={this.handleChangeFormData}
            />
            <select
              name="timeEvent"
              className="bgn-time select-time"
              value={timeEvent}
              onChange={this.handleChangeFormData}
            >
              {beginTime}
            </select>
            <span>-</span>
            <select
              name="endTimeEvent"
              className="bgn-end select-time"
              value={endTimeEvent}
              onChange={this.handleChangeFormData}
            >
              {endTime}
            </select>
            
          </div>

          <textarea
            className="create-event-form__field"
            name="descriptionEvent"
            cols="42 "
            rows="4 "
            placeholder="Add description "
            value={descriptionEvent}
            onChange={this.handleChangeFormData}
          ></textarea>

          <button type="submit" className="create-event-form__submit-btn">
            Save
          </button>
        </form>
      </>
    );
  }
}
export default Form;

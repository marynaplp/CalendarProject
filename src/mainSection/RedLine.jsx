import React from "react";
import moment from "moment";

const getTop = () => {
    const hours = moment().format("H");
    const minutes = moment().format("m");
    const top = +hours * 60 + +minutes;
    return `${top}px`;
};

class Redline extends React.Component {
    state = {
        top: getTop()
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                top: getTop()
            });
        }, 6000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return <div className="red-line" style={{ top: this.state.top }} />;
    }
}

export default Redline;
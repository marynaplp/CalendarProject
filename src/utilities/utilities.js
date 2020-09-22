import React from "react";
import moment from "moment"
export const generateNumbersRange = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i);
    };
    return result;
}

export const getStartPoint = () => {
    return generateNumbersRange(0, 23).map((arg) => {
        const hours = `0${arg}`.slice(-2);
        let increase = 0;
        let minutes = `0${increase}`;
        let startPoint = [];

        for (let i = 0; i < 4; i++) {
            startPoint.push( 
            <option key = { arg + i }
                value = { `${hours}:${minutes.slice(-2)}` } >
                { `${hours.slice(-2)}:${minutes.slice(-2)}` } </option>
            );
            increase += 15;
            minutes = `0${increase}`;
        }
        return startPoint;
    });
};
export const getEndPoint= () => {
    return generateNumbersRange(0, 24).map((arg) => {
        const hours = `0${arg}`.slice(-2);
        let increase = 0;
        let minutes = `0${increase}`;
        let endPoint = [];

        for (let i = 0; i < 4; i++) {
            endPoint.push( <option key = { arg + i }
                value = { `${hours}:${minutes.slice(-2)}` } >
                { `${hours.slice(-2)}:${minutes.slice(-2)}` } 
                </option>
            );
            increase += 15;
            minutes = `0${increase}`;
            if (hours === "24") i = 4;
        }
        return endPoint;
    });
};

export const getCurrentDate = (data) => {
    let increaseDate = data;

    const startOfWeek = moment()
        .startOf("isoWeek")
        .add(increaseDate, "day")
        .format("D");

    const endOfWeek = moment()
        .endOf("isoWeek")
        .add(increaseDate, "day")
        .format("D");

    let dataByOneWeeks = () => {
        let format = "MMMM";
        let year = moment()
            .add(+increaseDate, "day")
            .year();

        if (+startOfWeek > +endOfWeek) {
            year = "";
            format = "MMM";
        }
        let monthNumber = moment()
            .add(+increaseDate, "day")
            .startOf("isoWeek")
            .format(format);

        return `${monthNumber}  ${year}`;
    };

    let dataByTwoWeeks = () => {
        if (+startOfWeek > +endOfWeek) {
            let nextMonth = moment()
                .add(+increaseDate + 7, "day")
                .format("MMM");

            let nextYear = moment()
                .add(+increaseDate + 7, "day")
                .year();
            return `- ${nextMonth}  ${nextYear}`;
        }
        return "";
    };

    return `${dataByOneWeeks()}  ${dataByTwoWeeks()}`;
};
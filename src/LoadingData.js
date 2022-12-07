import React, {useEffect, useState} from "react";
import useSWR from "swr";
import DayCard from "./DayCard";
const fetcher = (...args) => fetch (...args).then((resp) => resp.json());

export default function LoadingData() {
        const {data} = useSWR("https://api.openweathermap.org/data/2.5/forecast?q=Kiev&units=metric&appid=412b97072a8f3fa87721cfc2b356b948", fetcher, {suspense : true});

        let filteredData = data['list'].filter(date => (date["dt_txt"].split(" ")[1] === "12:00:00"))
        let descriptions = filteredData.map(data => data["weather"][0]["description"])
        let dates = filteredData.map(data => data["dt_txt"].split(" ")[0])
        let min = filteredData.map(data => data["main"]["temp_min"])
        let max = filteredData.map(data => data["main"]["temp_max"])
        let wind = filteredData.map(data => data["wind"]["speed"])
        let humidity = filteredData.map(data => data["main"]["humidity"])
        let visibility = filteredData.map(data => data["visibility"])
        let pressure = filteredData.map(data => data["main"]["pressure"])

        let image = filteredData.map(data => imgIdLogic(data["weather"][0]["id"]))
        let dayList = []
        for (let i = 0; i < filteredData.length; i++) {
            console.log(image[i])
            dayList.push(new Day(dates[i],image[i],descriptions[i],min[i], max[i], wind[i],humidity[i],visibility[i],pressure[i]));
        }
        let listOfDayHtml = dayList.map(day => <DayCard key={day.date} day={day}/>)
         return (
             <div className={"app-container"}>
             <span id={"app-logo"}>WEATHER BIT</span>
             <ul className={"day-list"}>
                 {listOfDayHtml}
             </ul>
             </div>
         );
}


function imgIdLogic(id){
    if (id < 212)
        return "scattered-thunderstorms.svg";
    if (id < 300)
        return "thunderstorms.svg";
    else if (id < 400)
        return "hail.svg";
    else if (id < 600)
        return "rainy-2.svg";
    else if (id < 700)
        return "snow-2.svg";
    else if (id < 800)
        return "dust.svg";
    else if (id === 800)
        return "clear-day.svg";
    else if (id === 801 || id === 802)
        return "cloudy-1-day.svg";
    else if (id === 803 || id === 804)
        return "cloudy-1-day.svg";
}

class Day {
    constructor(date, img , description, min , max, wind , humidity , visibility , pressure ) {
        this.date = date;
        this.img = img;
        this.description = description;
        this.min = min;
        this.max = max;
        this.wind = wind;
        this.humidity = humidity;
        this.visibility = visibility;
        this.pressure = pressure;
    }
}

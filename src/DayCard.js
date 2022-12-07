import './style/DayCard.css';
export default function DayCard(props) {
    const style_1 = {
        content: `url(/${props.day.img})`,

    };
        return (
            <div className={"weather-day-card"}>
              <picture>
                <img style={style_1} alt="Day img value" ></img>
              </picture>
                <div className={"day-name-box"}>
                    <span>{props.day.date}</span>
                </div>
                <div className={"weather-card-info"}>
               <div className={"weather-description"}>
                    <span>{props.day.description}</span>
               </div>
              <div className={"temperature-box"}>
                 <span id={"min-temp"}>Min: {props.day.min}°C</span>
                 <span id={"max-temp"}>Max: {props.day.max}°C</span>
              </div>

              <div className={"another-weather-box"}>
                   <span id={"wind-speed"}>Wind speed: {props.day.wind}kph</span>
                   <span id={"humidity-value"}>Humidity value: {props.day.humidity}%</span>
                  <span id={"visibility-value"}>Visibility value: {props.day.visibility/1000}km</span>
                  <span id={"pressure-value"}>Pressure value: {props.day.pressure} mp</span>
              </div>
                </div>
            </div>
        );
}

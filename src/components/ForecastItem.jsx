export default function ForecastItem({
    day,
    icon = "/src/assets/rainyday.png",
    weather,
    key,
}) {
    return (
        <div className="forecast-wrapper" key={key}>
            <p className="forecast-day">{day}</p>
            <div className="forecast-weather-wrapper">
                <img src={icon} alt="" />
                <p>{weather}°</p>
            </div>
        </div>
    );
}

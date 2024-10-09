export default function ForecastItem({
    day,
    icon = "/src/assets/rainyday.png",
    weather,
}) {
    return (
        <div className="forecast-wrapper">
            <p>{day}</p>
            <img src={icon} alt="" />
            <p>{weather}°</p>
        </div>
    );
}

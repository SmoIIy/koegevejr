export default function ForecastItem({
    day,
    icon = "/src/assets/rainyday.png",
    weather,
    key,
}) {
    return (
        <div className="forecast-wrapper" key={key}>
            <p>{day}</p>
            <img src={icon} alt="" />
            <p>{weather}°</p>
        </div>
    );
}

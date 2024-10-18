import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import ForecastItem from "./components/ForecastItem";
import Menu from "./components/Menu";

import fetchDataCurrent, {
    getDayAndDate,
    getMonth,
    getDaysAndDates,
} from "./functions";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Weathers />
        </QueryClientProvider>
    );
}

export default App;

function Weathers() {
    //const location = "55.4575614462588, 12.182990318237113";
    const days = getDaysAndDates();
    const { isLoading, isError, data, error } = useQuery(
        ["apiData"],
        fetchDataCurrent
    );

    if (isLoading) {
        return (
            <div className="container">
                <p className="forecast-wrapper">Loading...</p>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="container">
                <p className="forecast-wrapper">
                    Error fetching data: {error.message}
                </p>
            </div>
        );
    }

    console.log(data.forecast.forecastday);

    return (
        <main className="container summer">
            <Menu className="menu" />

            <div className="left">
                <div className="left-wrapper top">
                    <p className="dato">{getDayAndDate()}</p>
                    <p className="dato måned">{getMonth()}</p>
                </div>
                <div className="left-wrapper mid grader">
                    <div>
                        <p className="feels-like">
                            {data.current.condition.text}
                        </p>{" "}
                        <p className="">{Math.trunc(data.current.temp_c)}°</p>
                        <p className="feels-like">
                            Føles som: {Math.trunc(data.current.feelslike_c)}°
                        </p>
                    </div>
                    <img src="/src/assets/icons/day/176.svg" alt="" />
                </div>
                <div className="left-wrapper bottom">
                    {data.forecast.forecastday.map((forecast, i) => (
                        <ForecastItem
                            key={i}
                            day={days[i]}
                            weather={Math.trunc(forecast.day.avgtemp_c)}
                            icon={forecast.day.condition.icon}
                        />
                    ))}
                </div>
            </div>
            <div className="right">
                <img src="../rain.webp" alt="regn" />
            </div>
        </main>
    );
}

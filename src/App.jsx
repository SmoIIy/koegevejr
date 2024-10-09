import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import ForecastItem from "./components/ForecastItem";
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

    // console.log(data.forecast.forecastday);
    return (
        <main className="container summer">
            <div className="left">
                <div className="left-wrapper top">
                    <p className="dato">{getDayAndDate()}</p>
                    <p className="dato måned">{getMonth()}</p>
                </div>
                <div className="left-wrapper mid grader">
                    <p className="">{Math.trunc(data.current.temp_c)}° </p>
                    <img src="/src/assets/rainyday.png" alt="" />
                </div>
                <div className="left-wrapper bottom">
                    {data.forecast.forecastday.map((forecast, i) => (
                        <ForecastItem
                            day={days[i]}
                            weather={Math.trunc(forecast.day.avgtemp_c)}
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

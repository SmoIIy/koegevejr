import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
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
    const endpoint =
        "https://api.weatherapi.com/v1/current.json?key=8c176c9f906748a2860125419240410&q=55.4575614462588, 12.182990318237113&aqi=no";
    const fetchData = async () => {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;
    };

    const { isLoading, isError, data, error } = useQuery(
        ["apiData"],
        fetchData
    );
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error fetching data: {error.message}</p>;
    }
    function getCurrentDate() {
        const today = new Date();

        const daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const dayOfWeek = daysOfWeek[today.getDay()];
        const month = months[today.getMonth()];
        const date = today.getDate();

        return `${dayOfWeek} ${date} ${month} `;
    }

    console.log(data);
    return (
        <main className="container summer">
            <div className="left">
                <div className="left-wrapper top">
                    <p className="dato">{getCurrentDate()}</p>
                </div>
                <div className="left-wrapper mid">
                    <p className="grader">{data.current.temp_c}°</p>
                </div>
                <div className="left-wrapper bottom"></div>
            </div>
            <div className="right">
                <img src="../rain.webp" alt="regn" />
            </div>
        </main>
    );
}

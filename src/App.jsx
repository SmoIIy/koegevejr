import { useState } from "react";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "react-query";
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
    const location = "55.4575614462588, 12.182990318237113";
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
    console.log(data);
    return (
        <>
            <h1>Hvordan er vejret i køge?</h1>
            <h2>data</h2>
        </>
    );
}

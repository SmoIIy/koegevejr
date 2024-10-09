export function getDayAndDate() {
    const today = new Date();
    const daysOfWeek = [
        "Søndag",
        "Mandag",
        "Tirsdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lørdag",
    ];

    const dayOfWeek = daysOfWeek[today.getDay()];
    const date = today.getDate();

    return `${dayOfWeek} ${date}`;
}

export function getMonth() {
    const today = new Date();
    const months = [
        "Januar",
        "Februar",
        "Marts",
        "April",
        "Maj",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "December",
    ];

    const month = months[today.getMonth()];

    return month;
}

export function getDaysAndDates() {
    const daysAndDates = [];
    const daysOfWeek = [
        "Søndag",
        "Mandag",
        "Tirsdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lørdag",
    ];

    // Create the 'today' object once
    const today = new Date();

    for (let i = 0; i <= 4; i++) {
        const dayOfWeek = daysOfWeek[today.getDay()];
        daysAndDates.push(`${dayOfWeek}`);

        // Move to the next day
        today.setDate(today.getDate() + 1);
    }

    console.log(daysAndDates);
    return daysAndDates;
}

export const endpointCurrent =
    "https://api.weatherapi.com/v1/forecast.json?key=8c176c9f906748a2860125419240410&q=55.4575614462588, 12.182990318237113&days=5&aqi=no";

const fetchDataCurrent = async () => {
    const response = await fetch(endpointCurrent);
    // console.log(await response.text());
    const data = await response.json();

    return data;
};
export default fetchDataCurrent;

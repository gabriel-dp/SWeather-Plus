import fetchData from "./fetchData";
import { dailyType, hourlyType } from "./dataTypes";

const BASE_URL = import.meta.env.VITE_API_URL;

const hourlyUrl = (location: [number, number], interval: number) =>
	`${BASE_URL}/weather/hourly/?location=${location.join(",")}&interval=${interval}`;

const dailyUrl = (location: [number, number]) => `${BASE_URL}/weather/daily/?location=${location.join(",")}`;

export async function getWeatherData(location: [number, number], interval: number) {
	const hourly = await fetchData(hourlyUrl(location, interval), "Cannot get weather");
	const daily = await fetchData(dailyUrl(location), "Cannot get weather");

	const weatherData = {
		dailyData: daily.values as dailyType,
		hourlyData: hourly as hourlyType,
	};

	return weatherData;
}

import fetchData from "@/utils/fetchData";
import { dailyType, hourlyType, weatherType } from "@/utils/dataTypes";

const BASE_URL = import.meta.env.VITE_API_URL;

const hourlyUrl = (location: [number, number], range: number) =>
	`${BASE_URL}/weather/hourly/?location=${location.join(",")}&range=${range}`;

const dailyUrl = (location: [number, number]) => `${BASE_URL}/weather/daily/?location=${location.join(",")}`;

export async function getWeatherData(location: [number, number], range: number) {
	try {
		const hourly = await fetchData(hourlyUrl(location, range), "Cannot get weather");
		const daily = await fetchData(dailyUrl(location), "Cannot get weather");

		const weatherData: weatherType = {
			status: true,
			dailyData: daily.values as dailyType,
			hourlyData: hourly as hourlyType,
		};

		return weatherData;
	} catch {
		return { status: false } as weatherType;
	}
}

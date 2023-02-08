import { useState, useEffect } from "react";

import { localType, weatherType } from "../utils/dataTypes";
import { getLocalDataByCity, getLocalDataByCoords } from "../utils/getLocalData";
import { getWeatherData } from "../utils/getWeatherData";

export default function useLocalWeather(citySearch: string | [number, number], interval: number) {
	const [localData, setLocalData] = useState({ status: false } as localType);
	const [weatherData, setWeatherData] = useState({ status: false } as weatherType);

	// Set localData if not previously set
	useEffect(() => {
		if (localData.status) return;

		const setLocalDataAsync = async () =>
			setLocalData(
				typeof citySearch === "string" ? await getLocalDataByCity(citySearch) : await getLocalDataByCoords(citySearch)
			);
		setLocalDataAsync();
	}, []);

	// Set weatherData if localData is ready and weatherData is not set
	useEffect(() => {
		if (!localData.status || weatherData.status) return;

		const location: [number, number] = [localData.lat, localData.lon];

		const setWeatherDataAsync = async () => setWeatherData(await getWeatherData(location, interval));
		setWeatherDataAsync();
	}, [localData]);

	return { localData, weatherData };
}

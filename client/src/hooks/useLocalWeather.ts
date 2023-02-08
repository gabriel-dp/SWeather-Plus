import { useState, useEffect } from "react";

import { localType, weatherType } from "../utils/dataTypes";
import { getLocalDataByCity } from "../utils/getLocalData";
import { getWeatherData } from "../utils/getWeatherData";

export default function useLocalWeather(cityName: string, interval: number) {
	const [localData, setLocalData] = useState({ status: false } as localType);
	const [weatherData, setWeatherData] = useState({ status: false } as weatherType);

	// Set localData if not previously set
	useEffect(() => {
		if (localData.status) return;

		const setLocalDataAsync = async () => setLocalData(await getLocalDataByCity(cityName));
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

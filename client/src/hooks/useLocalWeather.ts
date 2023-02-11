import { useState, useEffect } from "react";

import { localType, weatherType, searchType } from "@/utils/dataTypes";
import { getLocalDataByCity, getLocalDataByCoords } from "@/utils/getLocalData";
import { getWeatherData } from "@/utils/getWeatherData";

const resetLocal = { status: false } as localType;
const resetWeather = { status: false } as weatherType;

export default function useLocalWeather(search: searchType, range: number) {
	const [localData, setLocalData] = useState(resetLocal);
	const [weatherData, setWeatherData] = useState(resetWeather);

	// Set localData if not previously set
	useEffect(() => {
		setLocalData(resetLocal);
		setWeatherData(resetWeather);

		if (search === "") return;

		const setLocalDataAsync = async () =>
			setLocalData(typeof search === "string" ? await getLocalDataByCity(search) : await getLocalDataByCoords(search));
		setLocalDataAsync();
	}, [search]);

	// Set weatherData if localData is ready and weatherData is not set
	useEffect(() => {
		if (!localData.status) return;

		const location: [number, number] = [localData.lat, localData.lon];

		const setWeatherDataAsync = async () => setWeatherData(await getWeatherData(location, range));
		setWeatherDataAsync();
	}, [localData, range]);

	return { localData, weatherData };
}

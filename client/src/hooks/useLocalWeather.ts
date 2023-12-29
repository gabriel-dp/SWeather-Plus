import { useState, useEffect } from "react";

import { localType, weatherType, searchType, FetchStatus } from "@/utils/dataTypes";
import { getLocalDataByCity, getLocalDataByCoords } from "@/utils/getLocalData";
import { getWeatherData } from "@/utils/getWeatherData";

export default function useLocalWeather(search: searchType, range: number) {
	const [localData, setLocalData] = useState({ status: FetchStatus.IDLE } as localType);
	const [weatherData, setWeatherData] = useState({ status: FetchStatus.IDLE } as weatherType);

	// Set localData if not previously set
	useEffect(() => {
		if (typeof search == "string" && search.length == 0) return;

		setLocalData({ status: FetchStatus.LOADING } as localType);
		setWeatherData({ status: FetchStatus.LOADING } as weatherType);

		const setLocalDataAsync = async () =>
			setLocalData(typeof search === "string" ? await getLocalDataByCity(search) : await getLocalDataByCoords(search));
		setLocalDataAsync();
	}, [search]);

	// Set weatherData if localData is ready and weatherData is not set
	useEffect(() => {
		if (localData.status != FetchStatus.SUCCESS) return;

		const location: [number, number] = [localData.lat, localData.lon];

		const setWeatherDataAsync = async () => setWeatherData(await getWeatherData(location, range));
		setWeatherDataAsync();
	}, [localData, range]);

	return { localData, weatherData };
}

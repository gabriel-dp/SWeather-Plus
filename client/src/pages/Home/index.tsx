import { useState } from "react";

import { LocalWeatherDataContext } from "../../utils/dataTypes";
import useLocalWeather from "../../hooks/useLocalWeather";
import WeatherBackground from "../../components/WeatherBackground";

import { Screen } from "./styles";

export default function Home() {
	const [interval, setInterval] = useState(5);
	const [cityName, setCityName] = useState("porto Alegre");

	const { localData, weatherData } = useLocalWeather(cityName, interval);

	return (
		<Screen>
			<LocalWeatherDataContext.Provider value={{ localData, weatherData }}>
				<WeatherBackground />
			</LocalWeatherDataContext.Provider>
		</Screen>
	);
}

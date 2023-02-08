import { useState } from "react";

import useLocalWeather from "../../hooks/useLocalWeather";
import WeatherBackground from "../../components/WeatherBackground";

import { Screen } from "./styles";

export default function Home() {
	const [interval, setInterval] = useState(5);
	const [cityName, setCityName] = useState("porto Alegre");
	const { localData, weatherData } = useLocalWeather(cityName, interval);
	console.log(localData, weatherData);

	return (
		<Screen>
			<WeatherBackground />
		</Screen>
	);
}

import { useContext } from "react";

import { LocalWeatherDataContext } from "../../utils/dataTypes";

import { Background } from "./styles";

interface BackgroundProps {
	children?: React.ReactNode;
}

export default function WeatherBackground(props: BackgroundProps) {
	const { weatherData } = useContext(LocalWeatherDataContext);

	console.log(weatherData);

	return <Background>{props.children}</Background>;
}

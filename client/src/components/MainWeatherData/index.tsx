import { useContext } from "react";

import { formattedWeatherData } from "@/utils/formattedWeatherData";
import { DataContext } from "@/utils/dataTypes";

export default function MainWeatherData() {
	const contextData = useContext(DataContext);
	const data = new formattedWeatherData(contextData);

	return (
		<>
			<p>{data.getTemperature()}</p>
			<p>{data.getWindSpeed()}</p>
			<p>{data.getHumidity()}</p>
			<p>{data.getPrecipitationProbability()}</p>
		</>
	);
}

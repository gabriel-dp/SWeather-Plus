import { getWeatherData } from "../../utils/getWeatherData";
import { getLocalDataByCity } from "../../utils/getLocalData";

import WeatherBackground from "../../components/WeatherBackground";

import { Screen } from "./styles";

export default function Home() {
	// getWeatherData([14, 14], 6);
	// getLocalDataByCity("buenos aires");
	return (
		<Screen>
			<WeatherBackground />
		</Screen>
	);
}

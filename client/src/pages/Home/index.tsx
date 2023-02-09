import { useState, useRef } from "react";

import DataProvider from "../../components/DataProvider";
import WeatherBackground from "../../components/WeatherBackground";
import TimeSlider from "../../components/TimeSlider";
import LocationSearch from "../../components/LocationSearch";

import { Screen } from "./styles";

export default function Home() {
	const [range, setRange] = useState(5);
	const [interval, setInterval] = useState(range);
	const [citySearch, setCitySearch] = useState<string | [number, number]>("");

	return (
		<Screen>
			<DataProvider search={citySearch} range={range} interval={interval}>
				<WeatherBackground>
					<TimeSlider range={range} interval={interval} setInterval={setInterval} />
					<LocationSearch setCitySearch={setCitySearch} />
				</WeatherBackground>
			</DataProvider>
		</Screen>
	);
}

import { useState } from "react";

import { searchType, unitsSystemType } from "@/utils/dataTypes";
import DataProvider from "@/components/DataProvider";
import WeatherBackground from "@/components/WeatherBackground";
import TimeSlider from "@/components/TimeSlider";
import LocationSearch from "@/components/LocationSearch";
import MainWeatherData from "@/components/MainWeatherData";

import { Screen } from "./styles";

export default function Home() {
	const [range, setRange] = useState(5);
	const [interval, setInterval] = useState(range);
	const [search, setSearch] = useState<searchType>("");
	const [unitsSystem, setUnitSystem] = useState<unitsSystemType>("metric");

	return (
		<Screen>
			<DataProvider search={search} range={range} interval={interval} unitsSystem={unitsSystem}>
				<WeatherBackground>
					<MainWeatherData />
					<TimeSlider range={range} interval={interval} setInterval={setInterval} />
					<LocationSearch setSearch={setSearch} />
				</WeatherBackground>
			</DataProvider>
		</Screen>
	);
}

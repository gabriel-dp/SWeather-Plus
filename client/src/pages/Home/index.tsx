import { useState, useEffect } from "react";

import { searchType, unitsSystemType } from "@/utils/dataTypes";
import DataProvider from "@/components/DataProvider";
import WeatherBackground from "@/components/WeatherBackground";
import MainWeatherData from "@/components/MainWeatherData";
import TimeDisplay from "@/components/TimeDisplay";
import TimeSlider from "@/components/TimeSlider";
import WeatherImage from "@/components/WeatherImage";
import LocationSearch from "@/components/LocationSearch";

import { Screen, MainWeatherWrapper } from "./styles";

export default function Home() {
	const [range, setRange] = useState(6);
	const [interval, setInterval] = useState(range);
	const [search, setSearch] = useState<searchType>("");
	const [unitsSystem, setUnitSystem] = useState<unitsSystemType>("metric");

	useEffect(() => {
		setInterval(range);
	}, [search]);

	return (
		<Screen>
			<DataProvider search={search} range={range} interval={interval} unitsSystem={unitsSystem}>
				<WeatherBackground>
					<MainWeatherWrapper>
						<MainWeatherData>
							<WeatherImage />
							<TimeDisplay />
							<TimeSlider range={range} interval={interval} setInterval={setInterval} />
						</MainWeatherData>
						<LocationSearch setSearch={setSearch} />
					</MainWeatherWrapper>
				</WeatherBackground>
			</DataProvider>
		</Screen>
	);
}

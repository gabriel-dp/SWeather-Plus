import { useState, useEffect } from "react";

import { searchType } from "@/utils/dataTypes";
import DataProvider from "@/components/DataProvider";
import WeatherBackground from "@/components/WeatherBackground";
import MainWeatherData from "@/components/MainWeatherData";
import TimeDisplay from "@/components/TimeDisplay";
import TimeSlider from "@/components/TimeSlider";
import WeatherImage from "@/components/WeatherImage";
import LocationSearch from "@/components/LocationSearch";

import { Screen, MainWeatherWrapper } from "./styles";

export default function Home() {
	const range = 5;
	const unitsSystem = "metric";

	const [interval, setInterval] = useState(range);
	const [search, setSearch] = useState<searchType>("");

	useEffect(() => {
		setInterval(range);
	}, [search, range]);

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

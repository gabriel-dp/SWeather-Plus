import { useState, useEffect } from "react";

import { searchType, unitsSystemType } from "@/utils/dataTypes";
import DataProvider from "@/components/DataProvider";
import WeatherBackground from "@/components/WeatherBackground";
import MainWeatherData from "@/components/MainWeatherData";
import TimeDisplay from "@/components/TimeDisplay";
import TimeSlider from "@/components/TimeSlider";
import WeatherImage from "@/components/WeatherImage";
import WeatherMenu from "@/components/WeatherMenu";

import { Screen, MainWeatherWrapper } from "./styles";

export default function Home() {
	const range = 6;
	const [unitsSystem, setUnitsSystem] = useState<unitsSystemType>(null);

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
						<WeatherMenu setSearch={setSearch} unitsSystem={unitsSystem} setUnitSystem={setUnitsSystem} />
					</MainWeatherWrapper>
				</WeatherBackground>
			</DataProvider>
		</Screen>
	);
}

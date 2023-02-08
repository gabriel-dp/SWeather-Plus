import { useEffect, useState } from "react";

import { IIntervalDataContext, IntervalDataContext } from "../../utils/dataTypes";
import useLocalWeather from "../../hooks/useLocalWeather";
import WeatherBackground from "../../components/WeatherBackground";
import TimeSlider from "../../components/TimeSlider";

import { Screen } from "./styles";

export default function Home() {
	const [range, setRange] = useState(5);
	const [cityName, setCityName] = useState("porto Alegre");

	const [interval, setInterval] = useState(range);
	const [intervalData, setIntervalData] = useState<IIntervalDataContext>({ status: false });

	const { localData, weatherData } = useLocalWeather(cityName, range);

	useEffect(() => {
		if (weatherData.status) {
			setIntervalData({
				status: true,
				interval: weatherData.hourlyData[interval],
				day: weatherData.dailyData,
			});
		}
	}, [weatherData, interval]);

	return (
		<Screen>
			<IntervalDataContext.Provider value={intervalData}>
				<WeatherBackground>
					<TimeSlider range={range} interval={interval} setInterval={setInterval} />
				</WeatherBackground>
			</IntervalDataContext.Provider>
		</Screen>
	);
}

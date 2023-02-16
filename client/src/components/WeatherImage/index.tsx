import { useContext } from "react";

import { DataContext } from "@/utils/dataTypes";
import { isTimeDay } from "@/utils/timeUtils";
import SunMoon from "./components/SunMoon";
import Cloud from "./components/Cloud";
import Precipitation from "./components/Precipitation";

import { WeatherImageContainer, CloudContainer, SunMoonContainer, PrecipitationContainer } from "./styles";

export default function WeatherImage() {
	const data = useContext(DataContext).intervalData;

	let cloudSize = 100,
		sunMoonSize = 0,
		isDay = true,
		moonPhasePercentage = 50,
		precipitationType = 0,
		precipitationIntensity = 0,
		windSpeed = 0;

	if (data.status) {
		// Controls Cloud and Sun/Moon size
		const { cloudCover } = data.interval.values;
		if (cloudCover < 10) {
			cloudSize = 0;
			sunMoonSize = 100;
		} else if (cloudCover < 80) {
			cloudSize = 50 + 0.375 * cloudCover;
			sunMoonSize = 100 - cloudCover * 0.375;
		}

		// Controls Day/Night and Moon phase
		const { sunriseTime, sunsetTime, moonPhase } = data.day;
		isDay = isTimeDay(data.interval.startTime, sunriseTime, sunsetTime);
		moonPhasePercentage = 12.5 * moonPhase;

		// Assign precipitation values
		precipitationType = data.interval.values.precipitationType;
		precipitationIntensity = data.interval.values.precipitationIntensity;

		windSpeed = data.interval.values.windSpeed;
	}

	return (
		<WeatherImageContainer>
			<SunMoonContainer size={sunMoonSize}>
				<SunMoon isDay={isDay} moonPhasePercentage={moonPhasePercentage} />
			</SunMoonContainer>
			<PrecipitationContainer size={cloudSize}>
				<Precipitation type={precipitationType} intensity={precipitationIntensity} windSpeed={windSpeed} />
			</PrecipitationContainer>
			<CloudContainer size={cloudSize}>
				<Cloud />
			</CloudContainer>
		</WeatherImageContainer>
	);
}

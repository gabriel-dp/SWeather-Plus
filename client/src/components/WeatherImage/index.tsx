import { useContext } from "react";

import { DataContext } from "@/utils/dataTypes";
import { isTimeDay } from "@/utils/timeUtils";
import SunMoon from "./components/SunMoon";
import Cloud from "./components/Cloud";

import { WeatherImageContainer, CloudContainer, SunMoonContainer } from "./styles";

export default function WeatherImage() {
	const data = useContext(DataContext).intervalData;

	let cloudSize = 100,
		sunMoonSize = 0,
		isDay = true,
		moonPhasePercentage = 50;

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
	}

	return (
		<WeatherImageContainer>
			<SunMoonContainer size={sunMoonSize}>
				<SunMoon isDay={isDay} moonPhasePercentage={moonPhasePercentage} />
			</SunMoonContainer>
			<CloudContainer size={cloudSize}>
				<Cloud />
			</CloudContainer>
		</WeatherImageContainer>
	);
}

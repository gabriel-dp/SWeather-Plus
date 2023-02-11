import { useContext } from "react";

import { DataContext } from "@/utils/dataTypes";
import { isTimeDay } from "@/utils/timeUtils";

import { SunMoonContainer, Sun, MoonDark, MoonDarkSide, Moon } from "./styles";

export default function SunMoon() {
	const data = useContext(DataContext).intervalData;

	if (!data.status) return;

	const { sunriseTime, sunsetTime, moonPhase } = data.day;
	const isDay = isTimeDay(data.interval.startTime, sunriseTime, sunsetTime);
	const moonPhasePercentage = 12.5 * moonPhase;

	const cloudCover = data.interval.values.cloudCover;
	let size = 0;
	if (cloudCover < 10) {
		size = 75;
	} else if (cloudCover < 80) {
		size = 75 - cloudCover * 0.3;
	}

	return (
		<SunMoonContainer size={size}>
			<Moon isDay={isDay}>
				<MoonDarkSide moonPhasePercentage={moonPhasePercentage} />
				<MoonDark moonPhasePercentage={moonPhasePercentage} />
			</Moon>
			<Sun isDay={isDay} />
		</SunMoonContainer>
	);
}

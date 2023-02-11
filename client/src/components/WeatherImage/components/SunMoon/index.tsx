import { useContext } from "react";

import { DataContext } from "@/utils/dataTypes";
import { isTimeDay } from "@/utils/timeUtils";

import { SunMoonContainer, Sun, MoonDark, MoonDarkSide, Moon } from "./styles";

export default function SunMoon() {
	const data = useContext(DataContext).intervalData;

	if (!data.status) {
		return (
			<SunMoonContainer>
				<Sun isDay={true} />
			</SunMoonContainer>
		);
	}

	const { sunriseTime, sunsetTime, moonPhase } = data.day;
	const isDay = isTimeDay(data.interval.startTime, sunriseTime, sunsetTime);
	const moonPhasePercentage = 12.5 * moonPhase;

	return (
		<SunMoonContainer>
			<Moon isDay={isDay}>
				<MoonDarkSide moonPhasePercentage={moonPhasePercentage} />
				<MoonDark moonPhasePercentage={moonPhasePercentage} />
			</Moon>
			<Sun isDay={isDay} />
		</SunMoonContainer>
	);
}

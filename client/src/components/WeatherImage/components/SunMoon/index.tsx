import { useContext } from "react";

import { DataContext } from "@/utils/dataTypes";

import { SunMoonContainer, Sun, MoonDark, MoonDarkSide, Moon } from "./styles";

const compareTimes = (time: string, sunriseTime: string, sunsetTime: string) => {
	const getDayMinutes = (timeString: string) => {
		const dateTime = new Date(timeString);
		const minutes = dateTime.getHours() * 60 + dateTime.getMinutes();
		return minutes;
	};

	return getDayMinutes(time) > getDayMinutes(sunriseTime) && getDayMinutes(time) < getDayMinutes(sunsetTime);
};

export default function SunMoon() {
	const data = useContext(DataContext).intervalData;

	if (!data.status) {
		return <SunMoonContainer></SunMoonContainer>;
	}

	const { sunriseTime, sunsetTime, moonPhase } = data.day;
	const isDay = compareTimes(data.interval.startTime, sunriseTime, sunsetTime);
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

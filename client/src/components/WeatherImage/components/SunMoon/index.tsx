import { useContext } from "react";

import { DataContext } from "@/utils/dataTypes";

import { SunMoonContainer, Sun, MoonDark, MoonDarkSide, Moon } from "./styles";

export default function SunMoon() {
	const data = useContext(DataContext).intervalData;

	if (!data.status) {
		return (
			<SunMoonContainer>
				<Sun />
			</SunMoonContainer>
		);
	}

	const { moonPhase } = data.day;
	const moonPhasePercentage = 12.5 * moonPhase;

	console.log(moonPhase, moonPhasePercentage);

	return (
		<SunMoonContainer>
			<Moon>
				<MoonDarkSide moonPhasePercentage={moonPhasePercentage} />
				<MoonDark moonPhasePercentage={moonPhasePercentage} />
			</Moon>
		</SunMoonContainer>
	);
}

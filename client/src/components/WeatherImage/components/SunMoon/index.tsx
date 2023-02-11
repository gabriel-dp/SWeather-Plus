import { SunMoonContainer, Sun, MoonDark, MoonDarkSide, Moon } from "./styles";

interface SunMoonProps {
	isDay?: boolean;
	moonPhasePercentage?: number;
}

export default function SunMoon(props: SunMoonProps) {
	return (
		<SunMoonContainer>
			<Moon isDay={props.isDay ?? true}>
				<MoonDarkSide moonPhasePercentage={props.moonPhasePercentage ?? 50} />
				<MoonDark moonPhasePercentage={props.moonPhasePercentage ?? 50} />
			</Moon>
			<Sun isDay={props.isDay ?? true} />
		</SunMoonContainer>
	);
}

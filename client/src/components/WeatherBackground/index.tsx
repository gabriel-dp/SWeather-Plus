import { useContext } from "react";

import { IntervalDataContext } from "../../utils/dataTypes";

import { Background } from "./styles";

interface BackgroundProps {
	children?: React.ReactNode;
}

export default function WeatherBackground(props: BackgroundProps) {
	const { interval } = useContext(IntervalDataContext);

	return (
		<Background>
			{interval?.startTime}
			{props.children}
		</Background>
	);
}

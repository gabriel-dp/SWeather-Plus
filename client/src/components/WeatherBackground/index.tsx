import { useContext } from "react";

import { DataContext } from "../../utils/dataTypes";

import { Background } from "./styles";

interface BackgroundProps {
	children?: React.ReactNode;
}

export default function WeatherBackground(props: BackgroundProps) {
	const { interval } = useContext(DataContext).intervalData;

	return <Background>{props.children}</Background>;
}

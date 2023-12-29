import { useContext } from "react";

import { DataContext, FetchStatus } from "@/utils/dataTypes";
import { isTimeDay } from "@/utils/timeUtils";

import { Background } from "./styles";

interface BackgroundProps {
	children?: React.ReactNode;
}

const brightnessCoefficient = (time: string, sunriseTime: string, sunsetTime: string) =>
	isTimeDay(time, sunriseTime, sunsetTime) ? 100 : 10;

const grayScaleCoefficient = (cloudCover: number) =>
	cloudCover < 1 ? 0 : Math.round((20 / Math.log(10) ** 2) * Math.log(cloudCover) ** 2);

export default function WeatherBackground(props: BackgroundProps) {
	const data = useContext(DataContext).intervalData;

	const brightness =
		data.status == FetchStatus.SUCCESS
			? brightnessCoefficient(data.interval.startTime, data.day.sunriseTime, data.day.sunsetTime)
			: 100;

	const grayscale = data.status == FetchStatus.SUCCESS ? grayScaleCoefficient(data.interval.values.cloudCover) : 0;

	return (
		<Background brightness={brightness} grayscale={grayscale}>
			{props.children}
		</Background>
	);
}

import { useContext } from "react";

import { DataContext, FetchStatus } from "@/utils/dataTypes";

import { CustomSlider } from "./styles";

interface SliderProps {
	range: number;
	interval: number;
	setInterval: React.Dispatch<React.SetStateAction<number>>;
}

function TimeSlider(props: SliderProps) {
	const { intervalData } = useContext(DataContext);

	// When range is equal to zero, put the thumb centered
	const range = props.range > 0 ? props.range : 1;
	const interval = props.range > 0 ? props.interval : 1;

	function handleIntervalChange(event: React.ChangeEvent<HTMLInputElement>) {
		if (props.range === 0) return;

		const value = parseInt(event.target.value, 10);
		props.setInterval(value);
	}

	return (
		<CustomSlider
			min={0}
			max={range * 2}
			step={1}
			value={interval}
			onChange={(event) => handleIntervalChange(event)}
			isActive={intervalData.status == FetchStatus.SUCCESS && props.range > 0}
			aria-label="time-slider"
		/>
	);
}

export default TimeSlider;

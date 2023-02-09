import { CustomSlider } from "./styles";

interface SliderProps {
	range: number;
	interval: number;
	setInterval: React.Dispatch<React.SetStateAction<number>>;
}

function TimeSlider(props: SliderProps) {
	function handleIntervalChange(event: React.ChangeEvent<HTMLInputElement>) {
		const value = parseInt(event.target.value, 10);
		props.setInterval(value);
	}

	return (
		<CustomSlider
			type="range"
			min={0}
			max={props.range * 2}
			value={props.interval}
			step={1}
			onChange={(event) => handleIntervalChange(event)}
			aria-label="time-slider"
		/>
	);
}

export default TimeSlider;

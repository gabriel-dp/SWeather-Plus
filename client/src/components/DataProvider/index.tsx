import { IntervalDataContext } from "../../utils/dataTypes";
import useLocalWeather from "../../hooks/useLocalWeather";

interface ProviderProps {
	search: string | [number, number];
	range: number;
	interval: number;
	children: React.ReactNode;
}

export default function DataProvider(props: ProviderProps) {
	const { localData, weatherData } = useLocalWeather(props.search, props.range);

	console.log(props, localData, weatherData);

	const intervalData = weatherData.status
		? { status: true, interval: weatherData.hourlyData[props.interval], day: weatherData.dailyData }
		: { status: false };

	return <IntervalDataContext.Provider value={intervalData}>{props.children}</IntervalDataContext.Provider>;
}

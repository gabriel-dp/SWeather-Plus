import useLocalWeather from "@/hooks/useLocalWeather";
import { DataContext, intervalType, searchType } from "@/utils/dataTypes";

interface ProviderProps {
	search: searchType;
	range: number;
	interval: number;
	children: React.ReactNode;
}

export default function DataProvider(props: ProviderProps) {
	const { localData, weatherData } = useLocalWeather(props.search, props.range);

	const intervalData: intervalType = weatherData.status
		? { status: true, interval: weatherData.hourlyData[props.interval], day: weatherData.dailyData }
		: ({ status: false } as intervalType);

	const providerValue = {
		localData: localData,
		intervalData: intervalData,
	};

	return <DataContext.Provider value={providerValue}>{props.children}</DataContext.Provider>;
}

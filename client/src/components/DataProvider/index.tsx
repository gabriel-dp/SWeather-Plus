import useLocalWeather from "@/hooks/useLocalWeather";
import { DataContext, intervalType, searchType, unitsSystemType } from "@/utils/dataTypes";

interface ProviderProps {
	search: searchType;
	range?: number;
	interval?: number;
	unitsSystem?: unitsSystemType;
	children: React.ReactNode;
}

export default function DataProvider(props: ProviderProps) {
	const { localData, weatherData } = useLocalWeather(props.search, props.range ?? 0);

	const intervalData: intervalType = weatherData.status
		? { status: true, interval: weatherData.hourlyData[props.interval ?? 0], day: weatherData.dailyData }
		: ({ status: false } as intervalType);

	const providerValue = {
		localData: localData,
		intervalData: intervalData,
		unitSystem: props.unitsSystem ?? "metric",
	};

	return <DataContext.Provider value={providerValue}>{props.children}</DataContext.Provider>;
}

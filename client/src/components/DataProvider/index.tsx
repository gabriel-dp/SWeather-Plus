import useLocalWeather from "@/hooks/useLocalWeather";
import { DataContext, FetchStatus, intervalType, searchType, unitSystemType } from "@/utils/dataTypes";

interface ProviderProps {
	search: searchType;
	range?: number;
	interval?: number;
	unitsSystem: unitSystemType | null;
	children: React.ReactNode;
}

export default function DataProvider(props: ProviderProps) {
	const { localData, weatherData } = useLocalWeather(props.search, props.range ?? 0);

	const intervalData: intervalType =
		weatherData.status == FetchStatus.SUCCESS
			? { status: FetchStatus.SUCCESS, interval: weatherData.hourlyData[props.interval ?? 0], day: weatherData.dailyData }
			: ({ status: FetchStatus.ERROR } as intervalType);

	const providerValue = {
		localData: localData,
		intervalData: intervalData,
		unitSystem: props.unitsSystem,
	};

	return <DataContext.Provider value={providerValue}>{props.children}</DataContext.Provider>;
}

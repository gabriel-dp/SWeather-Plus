import { createContext } from "react";

export type hourlyValues = {
	startTime: string;
	values: {
		temperature: number;
		humidity: number;
		windSpeed: number;
		precipitationType: number;
		precipitationIntensity: number;
		cloudCover: number;
		windDirection: number;
		precipitationProbability: number;
	};
};

export type hourlyType = hourlyValues[];

export type dailyType = {
	moonPhase: number;
	sunriseTime: string;
	sunsetTime: string;
};

export type weatherType = {
	status: boolean;
	dailyData: dailyType;
	hourlyData: hourlyType;
};

export type localType = {
	status: boolean;
	name: string;
	lat: number;
	lon: number;
	country: string[2];
	state?: string;
	local_names?: object;
};

export type intervalType = {
	status: boolean;
	interval: hourlyValues;
	day: dailyType;
};

export type searchType = string | [number, number];

export enum unitSystemType {
	METRIC,
	IMPERIAL,
}

export enum particles {
	rain = 1,
	snow = 2,
	freezingRain = 3,
	sleet = 4,
}

export interface IDataContext {
	intervalData: intervalType;
	localData: localType;
	unitSystem: unitSystemType | null;
}

export const DataContext = createContext<IDataContext>({
	intervalData: { status: false } as intervalType,
	localData: { status: false } as localType,
	unitSystem: null,
});

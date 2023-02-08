export type hourlyValues = {
	temperature: number;
	humidity: number;
	windSpeed: number;
	precipitationType: number;
	precipitationIntensity: number;
	rainIntensity: number;
	snowIntensity: number;
	freezingRainIntensity: number;
	sleetIntensity: number;
	cloudCover: number;
	windDirection: number;
	precipitationProbability: number;
};

export type hourlyType = {
	startTime: string;
	values: hourlyValues[];
};

export type dailyType = {
	moonPhase: number;
	sunriseTime: string;
	sunsetTime: string;
};

export type localType = {
	name: string;
	lat: number;
	lon: number;
	country: string[2];
	state?: string;
	local_names?: object;
};

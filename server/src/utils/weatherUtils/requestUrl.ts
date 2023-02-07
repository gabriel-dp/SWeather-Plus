const BASE_URL = "https://api.tomorrow.io/v4/timelines";
const API_KEY = process.env.API_KEY;

const WEATHER_FIELDS = ["temperature"];

const requestUrl = (
	fields: string[],
	location: [number, number],
	timesteps: string,
	startTime: string,
	endTime: string
) =>
	`${BASE_URL}/?fields=${fields.join(",")}&location=${location.join(
		","
	)}&timesteps=${timesteps}&startTime=${startTime}&endTime=${endTime}&apikey=${API_KEY}`;

const weatherUrl = (location: [number, number], startTime: string, endTime: string) =>
	requestUrl(WEATHER_FIELDS, location, "1h", startTime, endTime);

export { weatherUrl };

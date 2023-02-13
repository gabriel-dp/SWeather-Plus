const BASE_URL = "https://api.tomorrow.io/v4/timelines";
const API_KEY = process.env.TOMORROWIO_API_KEY;

const HOURLY_FIELDS = [
	"temperature", // Main data
	"humidity", // Main data
	"precipitationProbability", // Main data
	"windSpeed", // Main data & Animation
	"precipitationType", // Animation
	"precipitationIntensity", // Animation
	"cloudCover", // Animation & Background
	"windDirection", // Extra data
];

const DAYLY_FIELDS = ["sunriseTime", "sunsetTime", "moonPhase"];

const requestUrl = (fields: string[], location: string, timesteps: string, startTime: string, endTime: string) =>
	`${BASE_URL}/?fields=${fields.join(
		","
	)}&location=${location}&timesteps=${timesteps}&startTime=${startTime}&endTime=${endTime}&apikey=${API_KEY}`;

export const hourlyUrl = (location: string, startTime: string, endTime: string) =>
	requestUrl(HOURLY_FIELDS, location, "1h", startTime, endTime);

export const dailyUrl = (location: string, startTime: string, endTime: string) =>
	requestUrl(DAYLY_FIELDS, location, "1d", startTime, endTime);

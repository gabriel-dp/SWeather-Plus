import axios from "axios";

const BASE_URL = "http://api.openweathermap.org/geo/1.0";
const API_KEY = process.env.OPENWEATHER_API_KEY;

const requestByCityNameUrl = (cityName: string) => `${BASE_URL}/direct?q=${cityName}&appid=${API_KEY}&limit=1`;
const requestByCoordsUrl = (latitude: string, longitude: string) =>
	`${BASE_URL}/reverse?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&limit=1`;

export function requestLocalDataByCityName(cityName: string) {
	return axios
		.get(requestByCityNameUrl(cityName))
		.then((res) => res.data[0])
		.catch((error) => console.error(error));
}

export function requestLocalDataByCoords(latitude: string, longitude: string) {
	return axios
		.get(requestByCoordsUrl(latitude, longitude))
		.then((res) => res.data[0])
		.catch((error) => console.error(error));
}

import axios from "axios";

const BASE_URL = "http://api.openweathermap.org/geo/1.0/direct";
const API_KEY = process.env.OPENWEATHER_API_KEY;

const requestUrl = (cityName: string) => `${BASE_URL}?q=${cityName}&appid=${API_KEY}`;

export default function requestLocal(cityName: string) {
	return axios
		.get(requestUrl(cityName))
		.then((res) => res.data[0])
		.catch((error) => console.error(error));
}

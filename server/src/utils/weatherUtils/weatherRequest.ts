import axios from "axios";

import { timeNow } from "../timeUtils";
import { weatherUrl } from "./requestUrl";

export default async function requestWeatherData(location: string, interval: number) {
	const now = timeNow();
	const startTime = new Date(now.setHours(now.getHours() - interval));
	const endTime = new Date(now.setHours(now.getHours() + interval * 2));

	return axios
		.get(weatherUrl(location, startTime.toISOString(), endTime.toISOString()))
		.then((res) => res.data.data.timelines[0].intervals)
		.catch((error) => {
			console.log(error);
		});
}

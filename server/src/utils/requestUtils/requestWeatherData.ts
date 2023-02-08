import axios from "axios";

import { timeNow } from "../timeUtils";
import { hourlyUrl } from "./weatherRequestsUrls";
import { dailyUrl } from "./weatherRequestsUrls";

export function requestHourlyData(location: string, interval: number) {
	const now = timeNow();
	const startTime = new Date(now.setHours(now.getHours() - interval));
	const endTime = new Date(now.setHours(now.getHours() + interval * 2));

	return axios
		.get(hourlyUrl(location, startTime.toISOString(), endTime.toISOString()))
		.then((res) => res.data.data.timelines[0].intervals)
		.catch((error) => {
			console.log(error);
		});
}

export function requestDailyData(location: string) {
	return axios
		.get(dailyUrl(location, "", ""))
		.then((res) => res.data.data.timelines[0].intervals[0])
		.catch((error) => {
			console.log(error);
		});
}

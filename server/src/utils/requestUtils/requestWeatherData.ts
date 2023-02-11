import axios from "axios";

import { timeNow } from "@/utils/timeUtils";
import { hourlyUrl } from "./weatherRequestsUrls";
import { dailyUrl } from "./weatherRequestsUrls";

export function requestHourlyData(location: string, range: number) {
	const now = timeNow();
	const startTime = new Date(now.setHours(now.getHours() - range));
	const endTime = new Date(now.setHours(now.getHours() + Math.max(range * 2, 1))); // The endTime must be at least now+1 because range can be 0

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

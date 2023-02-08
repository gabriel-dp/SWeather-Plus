import axios from "axios";

import { timeNow } from "../timeUtils";
import { hourlyUrl } from "./weatherRequestsUrls";

export default function requestHourlyData(location: string, interval: number) {
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

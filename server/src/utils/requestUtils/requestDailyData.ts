import axios from "axios";

import { dailyUrl } from "./weatherRequestsUrls";

export default function requestDailyData(location: string) {
	return axios
		.get(dailyUrl(location, "", ""))
		.then((res) => res.data.data.timelines[0].intervals[0])
		.catch((error) => {
			console.log(error);
		});
}

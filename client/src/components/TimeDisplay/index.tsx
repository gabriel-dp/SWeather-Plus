import { useContext } from "react";

import { DataContext, FetchStatus } from "@/utils/dataTypes";

import { TimeText } from "./styles";

export default function TimeDisplay() {
	const contextData = useContext(DataContext);

	const time =
		contextData.intervalData.status == FetchStatus.SUCCESS
			? new Date(contextData.intervalData?.interval.startTime)
			: new Date(new Date().setMinutes(0));

	const formattedTime = time.toLocaleTimeString(navigator.languages[0], {
		hour: "2-digit",
		minute: "2-digit",
	});

	return <TimeText size={1.5}>{formattedTime}</TimeText>;
}

import { useContext } from "react";

import { DataContext } from "@/utils/dataTypes";

import { TimeText } from "./styles";

export default function TimeDisplay() {
	const contextData = useContext(DataContext);

	const time = contextData.intervalData.status
		? new Date(contextData.intervalData?.interval.startTime)
		: new Date(new Date().setMinutes(0));

	const formattedTime = time.toLocaleTimeString(navigator.language, { hour: "2-digit", minute: "2-digit" });

	return <TimeText size={1.5}>{formattedTime}</TimeText>;
}

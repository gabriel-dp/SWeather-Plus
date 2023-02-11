export function getDayMinutes(time: string) {
	const dateTime = new Date(time);
	const minutes = dateTime.getHours() * 60 + dateTime.getMinutes();
	return minutes;
}

export function isTimeDay(time: string, sunriseTime: string, sunsetTime: string) {
	const timeMinute = getDayMinutes(time);
	const sunriseMinute = getDayMinutes(sunriseTime);
	const sunsetMinute = getDayMinutes(sunsetTime);

	if (sunriseMinute < sunsetMinute) {
		if (timeMinute > sunriseMinute && timeMinute < sunsetMinute) return true;
	} else {
		if (timeMinute > sunriseMinute || timeMinute < sunsetMinute) return true;
	}

	return false;
}

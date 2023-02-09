interface Position {
	coords: {
		latitude: number;
		longitude: number;
	};
}

export default async function getGeolocationCoords() {
	let coordinates: [number, number] | [] = [];

	if (navigator.geolocation) {
		try {
			const { coords } = await new Promise<Position>((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(resolve, reject);
			});
			coordinates = [coords.latitude, coords.longitude];
		} catch (error) {
			console.error(error);
		}
	}

	return coordinates;
}

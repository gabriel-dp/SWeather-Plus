import fetchData from "@/utils/fetchData";
import { FetchStatus, localType } from "@/utils/dataTypes";

const BASE_URL = import.meta.env.VITE_API_URL;

const localByCityUrl = (name: string) => `${BASE_URL}/local/city/?name=${name}`;

const localByCoordsUrl = (location: [number, number]) =>
	`${BASE_URL}/local/coords/?lat=${location[0]}&lon=${location[1]}`;

export async function getLocalDataByCity(name: string) {
	try {
		const localData: localType = await fetchData(localByCityUrl(name), "Cannot get local");
		return { ...localData, status: FetchStatus.SUCCESS };
	} catch {
		return { status: FetchStatus.ERROR } as localType;
	}
}

export async function getLocalDataByCoords(location: [number, number]) {
	try {
		const localData: localType = await fetchData(localByCoordsUrl(location), "Cannot get local");
		return { ...localData, status: FetchStatus.SUCCESS };
	} catch {
		return { status: FetchStatus.ERROR } as localType;
	}
}

import { Request, Response } from "express";

import checkQueries from "../utils/checkQueries";
import { requestLocalDataByCityName, requestLocalDataByCoords } from "../utils/requestUtils/requestLocalData";

export async function getLocalDataByCityName(req: Request, res: Response) {
	try {
		checkQueries(req.query, ["name"]);
		const { name } = req.query;
		const fixedName = name ? name.toString().replace(" ", "_") : "";

		const data = await requestLocalDataByCityName(fixedName);
		return res.status(200).send(data);
	} catch (error) {
		return res.status(500).send(`GET /local/city/ - ${error}`);
	}
}

export async function getLocalDataByCoords(req: Request, res: Response) {
	try {
		checkQueries(req.query, ["lat", "lon"]);
		const { lat, lon } = req.query;

		const data = await requestLocalDataByCoords(lat as string, lon as string);
		return res.status(200).send(data);
	} catch (error) {
		return res.status(500).send(`GET /local/coords/ - ${error}`);
	}
}

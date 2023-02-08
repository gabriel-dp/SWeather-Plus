import { Request, Response } from "express";

import checkQueries from "../utils/queryValidations";
import requestWeatherData from "../utils/weatherUtils/weatherRequest";

export async function getWeatherData(req: Request, res: Response) {
	try {
		checkQueries(req.query, ["location", "interval"]);
		const { location, interval } = req.query;

		const data = await requestWeatherData(location as string, parseInt(interval as string, 10));
		return res.status(200).send(data);
	} catch (error) {
		return res.status(500).send(`GET /weather/ - ${error}`);
	}
}

import { Request, Response } from "express";

import checkQueries from "../utils/checkQueries";
import { requestHourlyData, requestDailyData } from "../utils/requestUtils/requestWeatherData";

async function getHourlyData(req: Request, res: Response) {
	try {
		checkQueries(req.query, ["location", "range"]);
		const { location, range } = req.query;

		const data = await requestHourlyData(location as string, parseInt(range as string, 10));
		return res.status(200).send(data);
	} catch (error) {
		return res.status(500).send(`GET /hourly/ - ${error}`);
	}
}

async function getDailyData(req: Request, res: Response) {
	try {
		checkQueries(req.query, ["location"]);
		const { location } = req.query;

		const data = await requestDailyData(location as string);
		return res.status(200).send(data);
	} catch (error) {
		return res.status(500).send(`GET /daily/ - ${error}`);
	}
}

export default { getHourlyData, getDailyData };

import { Request, Response } from "express";

import checkQueries from "../utils/checkQueries";
import requestHourlyData from "../utils/requestUtils/requestHourlyData";

export async function getHourlyData(req: Request, res: Response) {
	try {
		checkQueries(req.query, ["location", "interval"]);
		const { location, interval } = req.query;

		const data = await requestHourlyData(location as string, parseInt(interval as string, 10));
		return res.status(200).send(data);
	} catch (error) {
		return res.status(500).send(`GET /hourly/ - ${error}`);
	}
}

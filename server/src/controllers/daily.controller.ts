import { Request, Response } from "express";

import checkQueries from "../utils/checkQueries";
import requestDailyData from "../utils/requestUtils/dailyRequest";

export async function getDailyData(req: Request, res: Response) {
	try {
		checkQueries(req.query, ["location"]);
		const { location } = req.query;

		const data = await requestDailyData(location as string);
		return res.status(200).send(data);
	} catch (error) {
		return res.status(500).send(`GET /weather/ - ${error}`);
	}
}

import { Request, Response } from "express";

import checkQueries from "../utils/checkQueries";
import requestLocalData from "../utils/requestUtils/requestLocalData";

export async function getLocalData(req: Request, res: Response) {
	try {
		checkQueries(req.query, ["city"]);
		const { city } = req.query;

		const data = await requestLocalData(city as string);
		return res.status(200).send(data);
	} catch (error) {
		return res.status(500).send(`GET /local/ - ${error}`);
	}
}

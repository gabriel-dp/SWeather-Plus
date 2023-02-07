import { Request, Response } from "express";
import checkQueries from "../utils/queryValidations";

export async function getWeatherData(req: Request, res: Response) {
	try {
		checkQueries(req.query, ["gabriel"]);
		return res.send("gabriel-dp");
	} catch (error) {
		return res.status(500).send(`GET /weather/ - ${error}`);
	}
}

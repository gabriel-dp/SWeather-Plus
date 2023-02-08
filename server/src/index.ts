import dotenv from "dotenv";
dotenv.config();

import express from "express";

import { getHourlyData } from "./controllers/hourly.controller";
import { getDailyData } from "./controllers/daily.controller";
import { getLocalData } from "./controllers/local.controller";

const app = express();
app.use(express.json());

app.get("/hourly", getHourlyData);
app.get("/daily", getDailyData);
app.get("/local", getLocalData);

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

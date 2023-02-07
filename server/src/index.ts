import dotenv from "dotenv";
dotenv.config();

import express from "express";

import { getWeatherData } from "./controller/weather.controller";

const app = express();
app.use(express.json());

app.get("/weather", getWeatherData);

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

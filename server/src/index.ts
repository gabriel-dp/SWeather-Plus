import express from "express";
import { getWeatherData } from "./controller/weather.controller";

const app = express();

app.get("/weather", getWeatherData);

const port = 5000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

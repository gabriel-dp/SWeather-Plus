import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

import weatherRouter from "./routers/weather.router";
import localRouter from "./routers/local.router";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/weather", weatherRouter);
app.use("/local", localRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

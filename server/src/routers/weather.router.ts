import { Router } from "express";

import weatherController from "@/controllers/weather.controller";

const router = Router();

router.get("/hourly", weatherController.getHourlyData);
router.get("/daily", weatherController.getDailyData);

export default router;

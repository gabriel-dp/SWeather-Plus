import { Router } from "express";

import localController from "@/controllers/local.controller";

const router = Router();

router.get("/city", localController.getLocalDataByCityName);
router.get("/coords", localController.getLocalDataByCoords);

export default router;

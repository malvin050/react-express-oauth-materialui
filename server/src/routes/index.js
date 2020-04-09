import express from "express";

import apiRouter from "./api";
import authenticationRouter from "./authentication";
import healthRouter from "./health";

const router = express.Router();

// must have authentication applied first
router.use(authenticationRouter);
router.use("/api", apiRouter);
router.use(healthRouter);

export default router;

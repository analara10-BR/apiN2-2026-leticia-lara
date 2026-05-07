import { Router } from "express";

import ApiController from "../controllers/api.controller.js";

import verifyParamId from "../middlewares/verify.id.middleware.js";

const router = Router();

const controller = new ApiController();

router.get("/roupas",
(req, res) => controller.getRoupas(req, res));

router.get("/roupas/:id",
verifyParamId,
(req, res, next) =>
controller.getRoupaByParamId(req, res, next)
);

export default router;

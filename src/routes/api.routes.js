import { Router } from "express";
import { getInfo } from "../controllers/api.controller.js";

const router = Router();

router.get("/info", getInfo);

export { router };

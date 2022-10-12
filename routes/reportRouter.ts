import express from "express";
import { getAllReports, getReport, createReport } from "../controllers/reportController";
const router = express.Router();

router.route("/").get(getAllReports).post(createReport);
router.route("/:id").get(getReport);
export default router;
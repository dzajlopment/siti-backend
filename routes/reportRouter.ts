import express from "express";
import multer from "multer";
import {
	getAllReports,
	getReport,
	createReport,
	deleteReport,
	patchReport,
	uploadReportImage,
} from "../controllers/reportController";

const router = express.Router();

router.route("/").get(getAllReports).post(uploadReportImage, createReport);

router.route("/:id").get(getReport).delete(deleteReport).patch(patchReport);

export default router;

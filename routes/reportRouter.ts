import express from "express";
import { getAllReports, getReport, createReport, deleteReport, patchReport } from "../controllers/reportController";

const router = express.Router();

router.route("/")
    .get(getAllReports)
    .post(createReport)

router.route("/:id")
    .get(getReport)
    .delete(deleteReport)
    .patch(patchReport)

export default router;
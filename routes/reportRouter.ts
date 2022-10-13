import express from "express";
import { getAllReports, getReport, createReport } from "../controllers/reportController";

const router = express.Router();

router.route("/")
    .get(getAllReports)
    .post(createReport)

router.route("/:id")
    .get((req, res) => { console.log(req.params.id); res.status(200).json({ data: req.params.id }) })
    .delete(() => { console.log("bruh") })


export default router;
import express from "express";
import { getAllIdeas, createIdea, getIdea, deleteIdea, patchIdea } from "../controllers/ideaController";

const router = express.Router();

router.route("/")
    .get(getAllIdeas)
    .post(createIdea)

router.route("/:id")
    .get(getIdea)
    .delete(deleteIdea)
    .patch(patchIdea)

export default router;
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";
import APIFeatures from "../utils/APIFeatures"
import type { Model } from "mongoose";
import type { Response, Request, NextFunction } from "express"

export const getAll = (Model: Model<any>, req: Request, res: Response, next: NextFunction) =>
    catchAsync((async (req: Request, res: Response, next: NextFunction) => {
        let filter = {};
        if (req.params.reportId) {
            filter = { report: req.params.reportId };
        }

        const features = new APIFeatures(Model.find(filter), req.query as any);

        const doc = await features.query;

        res.status(200).json({
            status: "success",
            results: doc.length,
            data: {
                data: doc
            }
        })
    }))(req, res, next)

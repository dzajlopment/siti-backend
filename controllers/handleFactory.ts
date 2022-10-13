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

export const createOne = (Model: Model<any>, req: Request, res: Response, next: NextFunction) =>
    catchAsync((async (req: Request, res: Response, next: NextFunction) => {

        const { title, description, lat, lng, date, image } = req.query

        const doc = await Model.insertMany([
            { title, description, lat, lng, date, image }
        ])

        res.status(201).json({
            status: "success",
            data: {
                data: doc
            }
        })

    }))(req, res, next)

export const getOne = (Model: Model<any>, req: Request, res: Response, next: NextFunction) => {
    catchAsync((async (req: Request, res: Response, next: NextFunction) => {

        const id = req.params.id;

        const features = new APIFeatures(Model.find({ _id: id }), req.query as any);

        const doc = await features.query;

        res.status(200).json({
            status: "success",
            results: doc.length,
            data: {
                data: doc[0]
            }
        })

    }))(req, res, next)
}
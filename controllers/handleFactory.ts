import catchAsync from "../utils/catchAsync";
import APIFeatures from "../utils/APIFeatures"
import type { Model } from "mongoose";
import type { Response, Request, NextFunction } from "express"
import cloudinary from "cloudinary"
import dotenv from "dotenv"

dotenv.config({});

cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
})

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

export const createOne = (Model: Model<any>, req: Request, res: Response, next: NextFunction) => {
    catchAsync((async (req: Request, res: Response, next: NextFunction) => {
        if (req.body.image !== null) {
            if (req.body.image.startsWith("file:///")) {
                req.body.image = req.body.image.substring(8);
            }
            await cloudinary.v2.uploader.upload(req.body.image, {
                resource_type: "image",
            }).then(result => {
                req.body.image = result.secure_url;
                console.log(req.body.image);
            }).catch((err) => {
                console.log("Error", JSON.stringify(err, null, 2));
                return;
            });
        }
        // console.log(req.body)
        const doc = await Model.insertMany([
            req.body
        ])
        console.log(doc);

        res.status(201).json({
            status: "success",
            data: {
                data: doc
            }
        })

    }))(req, res, next)
}

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

export const deleteOne = (Model: Model<any>, req: Request, res: Response, next: NextFunction) => {
    catchAsync((async (req: Request, res: Response, next: NextFunction) => {

        const id = req.params.id;
        await Model.findByIdAndRemove(id);

        res.status(204).json({
            status: "success",
            data: null
        })

    }))(req, res, next)

}

export const patchOne = (Model: Model<any>, req: Request, res: Response, next: NextFunction) => {
    catchAsync((async (req: Request, res: Response, next: NextFunction) => {

        const id = req.params.id;

        const doc = await Model.findOneAndUpdate({ _id: id }, req.query, { upsert: true })

        res.status(200).json({
            status: 'success',
            data: {
                data: doc[0],
            }
        })

    }))(req, res, next)
}

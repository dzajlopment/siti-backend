import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";
import APIFeatures from "../utils/APIFeatures"
export const getAll = Model => {
    catchAsync(async (req, res, next) => {
        let filter = {};
        if (req.params.reportId) {
            filter = { report: req.params.reportId };
        }

        const features = new APIFeatures(Model.find(filter), req.query);

        const doc = await features.query;

        res.status(200).json({
            status: "success",
            results: doc.length,
            data: {
                data: doc
            }
        })

    })
}
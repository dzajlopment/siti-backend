import catchAsync from "../utils/catchAsync";
import AppError from "../utils/AppError";

export const getAll = Model => {
  catchAsync(async (req, res, next) => {
    let filter = {};
    if(req.params.reportId) {
      filter = {report: req.params.reportId};
    }

    const 

  })
}
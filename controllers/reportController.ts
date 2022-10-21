import {
	getAll,
	createOne,
	getOne,
	deleteOne,
	patchOne,
} from "./handleFactory";
import Report from "./../models/reportModel";
import multer from "multer";
import AppError from "../utils/AppError";

const multerStorage = multer.diskStorage({
	destination(req, file, callback) {
		callback(null, "img");
	},
	filename(req, file, callback) {
		const ext = file.mimetype.split("/")[1];
		const filename = file.originalname;
		callback(null, `report-${filename}.${ext}`);
	},
});

const upload = multer({
	storage: multerStorage,
	fileFilter: (req, file, cb) => {
		if (file.mimetype.startsWith("image")) {
			cb(null, true);
		} else {
			cb(
				new AppError("Not an image! Please upload only images", 400) as any,
				false
			);
		}
	},
});

export const uploadReportImage = upload.single("image");
export const getAllReports = getAll.bind(null, Report);
export const createReport = createOne.bind(null, Report);
export const getReport = getOne.bind(null, Report);
export const deleteReport = deleteOne.bind(null, Report);
export const patchReport = patchOne.bind(null, Report);

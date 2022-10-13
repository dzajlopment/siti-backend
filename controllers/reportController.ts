import { getAll, createOne, getOne } from "./handleFactory";
import Report from "./../models/reportModel";
export const getAllReports = getAll.bind(null, Report)
export const createReport = createOne.bind(null, Report);
export const getReport = getOne.bind(null, Report);
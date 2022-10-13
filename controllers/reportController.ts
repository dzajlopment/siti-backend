import { getAll } from "./handleFactory";
import Report from "./../models/reportModel";
export const getAllReports = getAll.bind(null, Report)
export const createReport = () => { }
export const getReport = () => { }
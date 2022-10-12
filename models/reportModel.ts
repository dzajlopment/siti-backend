import mongoose from "mongoose"

const reportSchema = new mongoose.Schema()

export default mongoose.model("Report", reportSchema)
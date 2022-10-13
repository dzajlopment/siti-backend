import mongoose from "mongoose"

const reportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    },
    image: {
        data: Buffer,
        contentType: String
    },
    description: String,
});

const ReportModel = mongoose.model("Report", reportSchema);

export default ReportModel
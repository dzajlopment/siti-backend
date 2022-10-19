import mongoose from "mongoose";

const Location = new mongoose.Schema({
    lat: Number,
    lng: Number
})

const IdeaVoting = new mongoose.Schema({
    liked: Boolean,
    score: Number
})

const IdeaStatus = new mongoose.Schema({
    Approved: Boolean,
    Rejected: Boolean
})

const IdeaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    justification: String,
    created: {
        type: Date,
        default: new Date()
    },
    location: Location || String, // lat=10&lon=10 {lat: 10, lon: 10}
    cost: Number,
    status: IdeaStatus,
    voting: IdeaVoting
});

export const IdeaModel = mongoose.model("Idea", IdeaSchema);

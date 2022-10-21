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
    approved: Boolean,
    rejected: Boolean
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
    location: {
        lat: Number,
        lng: Number,
        adress: String,
    },
    cost: Number,
    status: IdeaStatus,
    voting: IdeaVoting
});

export const IdeaModel = mongoose.model("Idea", IdeaSchema);

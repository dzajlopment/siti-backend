import mongoose from "mongoose";

const Location = new mongoose.Schema({
    lat: Number,
    lng: Number,
    adress: String
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
    description: {
        type: String,
        required: true
    },
    justification: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: new Date()
    },
    location: {
        type: Location,
        required: true
    },
    cost: Number,
    status: IdeaStatus,
    voting: {
        type: IdeaVoting,
        default: {
            liked: false,
            score: 0,
        },
        required: true,
    }
});

export const IdeaModel = mongoose.model("Idea", IdeaSchema);

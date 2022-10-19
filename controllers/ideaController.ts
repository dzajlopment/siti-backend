import { IdeaModel } from "./../models/ideaModel";
import { getAll, createOne, getOne, deleteOne, patchOne } from "./handleFactory";

export const getAllIdeas = getAll.bind(null, IdeaModel)
export const createIdea = createOne.bind(null, IdeaModel);
export const getIdea = getOne.bind(null, IdeaModel);
export const deleteIdea = deleteOne.bind(null, IdeaModel);
export const patchIdea = patchOne.bind(null, IdeaModel);
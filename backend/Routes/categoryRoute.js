import express from "express";
import {getCategory} from "../Controller/categoryController.js"

const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);

export default categoryRouter;
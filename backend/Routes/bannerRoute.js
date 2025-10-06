import express from 'express';
import { getAllBanners } from '../Controller/bannerController.js';
const bannerRouter = express.Router();

bannerRouter.get('/all', getAllBanners);

export default bannerRouter;
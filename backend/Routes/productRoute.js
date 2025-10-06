import express from 'express';
import { getAllProducts} from '../Controller/productController.js';
const productRouter = express.Router();

productRouter.get('/all', getAllProducts);

export default productRouter;
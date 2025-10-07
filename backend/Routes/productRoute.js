import express from 'express';
import { getAllProducts, getProductById} from '../Controller/productController.js';
const productRouter = express.Router();

productRouter.get('/all', getAllProducts);
productRouter.get('/:id', getProductById);

export default productRouter;
import express from 'express';
import { getAllProducts, getProductById, getProductsByCategory, getProductBySearch} from '../Controller/productController.js';
const productRouter = express.Router();

productRouter.get('/all', getAllProducts);
productRouter.get('/:id', getProductById);
productRouter.get('/category/:category', getProductsByCategory);
productRouter.get('/search/:query', getProductBySearch);

export default productRouter;
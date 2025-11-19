import express from 'express';
import { getAllProducts, getProductById, getProductsByCategory, getProductBySearch, getUserCartItem, auth} from '../Controller/productController.js';
const productRouter = express.Router();

productRouter.get('/all', getAllProducts);
productRouter.get('/:id', getProductById);
productRouter.get('/category/:category', getProductsByCategory);
productRouter.get('/search/:query', getProductBySearch);
productRouter.get('/cart/items', auth, getUserCartItem);
export default productRouter;
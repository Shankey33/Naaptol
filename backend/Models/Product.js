import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    inStock: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    image: { type: String, required: true },
})

const Product = mongoose.model('Product', productSchema);
export default Product;
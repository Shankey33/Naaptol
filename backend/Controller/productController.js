import Product from "../Models/Product.js";

export const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error){
        res.status(500).json(error);
    }
}

export const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findOne({_id: id});
    if(product){
        res.status(200).json(product);
    }
    else{
        res.status(404)
    }
}
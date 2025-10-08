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


export const getProductsByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const products = await Product.find({ category: category });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getProductBySearch = async (req, res) => {
    const { query } = req.params;
    try{
        const products = await Product.find({ $text: { $search: query }});

        if(products.length === 0){
            return res.status(404).json({ message: "No products found" });
        }

        res.status(200).json(products);       
    }
    catch (err){
        res.status(500).json(err);
        console.log(("Error in searching products: ", err));
    }
}
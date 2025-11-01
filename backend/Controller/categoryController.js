import Product from "../Models/Product.js"

export const getCategory = async (req, res) => {
    if(req.query.type == "all"){
        const categories = await Product.find().distinct("category");
        res.status(200).json(categories);
    } 
    else {
        const categories = await Product.find({category: req.query.type});
        res.status(200).json(categories);
    }
}
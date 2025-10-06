import Banner from "../Models/Banner.js";

export const getAllBanners = async (req, res) => {
    try{
        const banners = await Banner.find({});
        res.status(200).json(banners);
    } catch (error){
        res.status(500).json(error);
    }
}

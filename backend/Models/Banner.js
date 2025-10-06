import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    link: { type: String, required: true },
})

const Banner = mongoose.model('Banner', bannerSchema);
export default Banner;
//External Imports
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

//Internal Imports
const PORT = process.env.PORT || 3001;
const mongoDbURI = process.env.mongoDbURI;
import userRoutes from './Routes/userRoutes.js';
import productRouter from './Routes/productRoute.js';
import bannerRouter from './Routes/bannerRoute.js';



//Setting up server
const app = express();
app.use(express.json());
app.use(cors());



//Handling user routes
app.use('/user', userRoutes);
app.use('/product', productRouter);
app.use('/banner', bannerRouter);


mongoose.connect(mongoDbURI)
.then(() => {
    console.log("Connection to database successful!")    
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    })
})
.catch((err) => console.error("Error connecting to MongoDB", err))




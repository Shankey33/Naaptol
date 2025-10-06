//React Imports
import React, { useState, useEffect } from 'react'

//External Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import axios from 'axios';

                                                
const Banner = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchBannerImages = async () => {
            axios.get('http://localhost:3000/banner/all')
                .then(response => {
                    setImages(response.data);
                }).catch(error => {
                    console.error('Error fetching banner images:', error);
                })
        }
        fetchBannerImages();
    }, []);


    return (

        // Image Slider with Swiper npm package
        <div className='w-full'>
            <Swiper
                loop={images.length > 1}
                autoplay={{delay: 3000}}
                modules={[Autoplay]}
            >
                {/* To do -> Add click to open functionality */}
                
                {images.map((image) => (
                    <SwiperSlide key={image._id}>                        
                        <a href="/"><img src={image.image} alt="banner image" className='w-150 md:w-full md:h-auto h-80 md:object-cover object-fill cursor-pointer ' /></a>
                    </SwiperSlide>
                ))}
            </Swiper> 
        </div>
    )
}

export default Banner

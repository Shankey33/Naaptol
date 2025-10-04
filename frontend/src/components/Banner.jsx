//External Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

//Internal Imports
import banner01 from '../assets/banner01.jpg';
import banner02 from '../assets/banner02.jpg';
import banner03 from '../assets/banner03.jpg';

                                                
const Banner = () => {
    const images = [banner01, banner02, banner03];

    return (

        // Image Slider with Swiper npm package
        <div className='w-full'>
            <Swiper loop 
                autoplay={{delay: 3000}}
                modules={[Autoplay]}
            >
                {/* To do -> Add click to open functionality */}
                
                {images.map((src, index) => (
                    <SwiperSlide key={index}>                        
                        <a href="/"><img src={src} alt="banner image" className='w-150 md:w-full md:h-auto h-80 md:object-cover object-fill cursor-pointer ' /></a>
                    </SwiperSlide>
                ))}
            </Swiper> 
        </div>
    )
}

export default Banner

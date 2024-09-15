'use client'


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import SlideImage from '@/data/slideImage';
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import SingleSlide from './SingleSlide';



const HomeSlider = () => {

    return (
        <section className='pt-[60px] sm:pt-[75px] md:pt-[77px] lg:pt-[80px]'>
            <div className=''>
                <div className=''>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        autoplay={{
                            "delay": 3000,
                            "disableOnInteraction": false
                        }}
                        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >



                        {
                            SlideImage.map((items, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <SingleSlide image={items} index={index} />
                                    </SwiperSlide>

                                )
                            })
                        }


                    </Swiper>
                </div>
            </div>
        </section>
    );


}



export default HomeSlider;

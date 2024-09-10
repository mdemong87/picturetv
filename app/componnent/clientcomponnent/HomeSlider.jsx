'use client'


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';

import slider1 from '../../../public/assets/slide1.jpg';
import slider10 from '../../../public/assets/slide10.jpg';
import slider11 from '../../../public/assets/slide11.jpg';
import slider12 from '../../../public/assets/slide12.jpg';
import slider13 from '../../../public/assets/slide13.jpg';
import slider14 from '../../../public/assets/slide14.jpg';
import slider15 from '../../../public/assets/slide15.jpg';
import slider16 from '../../../public/assets/slide16.jpg';
import slider17 from '../../../public/assets/slide17.jpg';
import slider18 from '../../../public/assets/slide18.jpg';
import slider19 from '../../../public/assets/slide19.jpg';
import slider20 from '../../../public/assets/slide20.jpg';
import slider21 from '../../../public/assets/slide21.jpg';
import slider22 from '../../../public/assets/slide22.jpg';
import slider23 from '../../../public/assets/slide23.jpg';
import slider24 from '../../../public/assets/slide24.jpg';
import slider25 from '../../../public/assets/slide25.jpg';
import slider26 from '../../../public/assets/slide26.jpg';
import slider27 from '../../../public/assets/slide27.jpg';
import slider28 from '../../../public/assets/slide28.jpg';
import slider29 from '../../../public/assets/slide29.jpg';
import slider3 from '../../../public/assets/slide3.jpg';
import slider30 from '../../../public/assets/slide30.jpg';
import slider31 from '../../../public/assets/slide31.jpg';
import slider32 from '../../../public/assets/slide32.jpg';
import slider4 from '../../../public/assets/slide4.jpg';
import slider5 from '../../../public/assets/slide5.jpg';

import slider6 from '../../../public/assets/slide6.jpg';
import slider7 from '../../../public/assets/slide7.jpg';
import slider8 from '../../../public/assets/slide8.jpg';
import slider9 from '../../../public/assets/slide9.jpg';



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


                        <SwiperSlide>
                            <SingleSlide image={slider1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider3} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider4} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider5} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider6} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider7} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider8} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider9} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider10} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider11} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider12} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider13} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider14} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider15} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider16} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider17} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider18} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider19} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider20} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider21} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider22} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider23} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider24} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider25} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider26} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider27} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider28} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider29} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider30} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider31} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleSlide image={slider32} />
                        </SwiperSlide>




                    </Swiper>
                </div>
            </div>
        </section>
    );


}



export default HomeSlider;

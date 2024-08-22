'use client'


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';

import Image from 'next/image';
import Link from 'next/link';
import slider2 from '../../../public/assets/bg-1.jpg';
import slider3 from '../../../public/assets/bg-2.jpg';
import slider4 from '../../../public/assets/bg-3.jpg';
import slider5 from '../../../public/assets/bg-4.jpg';
import slider1 from "../../../public/assets/bg.jpg";




const HomeSlider = () => {

    return (
        <section className='pt-[60px] sm:pt-[75px] md:pt-[77px] lg:pt-[80px]'>
            <div>
                <div>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='relative'>
                                <Image className='w-full h-[400px] md:h-full object-cover object-top' src={slider1} alt="Banner Image" />
                                <div className='absolute h-full w-full top-0 flex items-center justify-center bannartransparentBg'>
                                    <div className='text-center'>
                                        <h1 className='text-2xl md:text-3xl text-white font-bold pb-5'>Llewellyn Sánchez-Werner Classical Concert At LongHouse Reserve</h1>
                                        <p className='text-base  text-gray-200'>Llewellyn Sánchez-Werner performs in East Hampton, NY</p>
                                        <div className='mt-6 md:mt-12'>
                                            <Link href={'/booking'} className='pbg2 py-1 px-3 md:py-3 md:px-5 rounded-md cursor-pointer text-white text-lg font-semibold text-center'>Book PTV</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='relative'>
                                <Image className='w-full h-[400px] md:h-full object-cover object-top' src={slider2} alt="Banner Image" />
                                <div className='absolute h-full w-full top-0 flex items-center justify-center bannartransparentBg'>
                                    <div className='text-center'>
                                        <h1 className='text-2xl md:text-3xl text-white font-bold pb-5'>Llewellyn Sánchez-Werner Classical Concert At LongHouse Reserve</h1>
                                        <p className='text-base  text-gray-200'>Llewellyn Sánchez-Werner performs in East Hampton, NY</p>
                                        <div className='mt-6 md:mt-12'>
                                            <Link href={'/booking'} className='pbg2 py-1 px-3 md:py-3 md:px-5 rounded-md cursor-pointer text-white text-lg font-semibold text-center'>Book PTV</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='relative'>
                                <Image className='w-full h-[400px] md:h-full object-cover object-top' src={slider3} alt="Banner Image" />
                                <div className='absolute h-full w-full top-0 flex items-center justify-center bannartransparentBg'>
                                    <div className='text-center'>
                                        <h1 className='text-2xl md:text-3xl text-white font-bold pb-5'>Llewellyn Sánchez-Werner Classical Concert At LongHouse Reserve</h1>
                                        <p className='text-base  text-gray-200'>Llewellyn Sánchez-Werner performs in East Hampton, NY</p>
                                        <div className='mt-6 md:mt-12'>
                                            <Link href={'/booking'} className='pbg2 py-1 px-3 md:py-3 md:px-5 rounded-md cursor-pointer text-white text-lg font-semibold text-center'>Book PTV</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='relative'>
                                <Image className='w-full h-[400px] md:h-full object-cover object-top' src={slider4} alt="Banner Image" />
                                <div className='absolute h-full w-full top-0 flex items-center justify-center bannartransparentBg'>
                                    <div className='text-center'>
                                        <h1 className='text-2xl md:text-3xl text-white font-bold pb-5'>Llewellyn Sánchez-Werner Classical Concert At LongHouse Reserve</h1>
                                        <p className='text-base  text-gray-200'>Llewellyn Sánchez-Werner performs in East Hampton, NY</p>
                                        <div className='mt-6 md:mt-12'>
                                            <Link href={'/booking'} className='pbg2 py-1 px-3 md:py-3 md:px-5 rounded-md cursor-pointer text-white text-lg font-semibold text-center'>Book PTV</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='relative'>
                                <Image className='w-full h-[400px] md:h-full object-cover object-top' src={slider5} alt="Banner Image" />
                                <div className='absolute h-full w-full top-0 flex items-center justify-center bannartransparentBg'>
                                    <div className='text-center'>
                                        <h1 className='text-2xl md:text-3xl text-white font-bold pb-5'>Llewellyn Sánchez-Werner Classical Concert At LongHouse Reserve</h1>
                                        <p className='text-base  text-gray-200'>Llewellyn Sánchez-Werner performs in East Hampton, NY</p>
                                        <div className='mt-6 md:mt-12'>
                                            <Link href={'/booking'} className='pbg2 py-1 px-3 md:py-3 md:px-5 rounded-md cursor-pointer text-white text-lg font-semibold text-center'>Book PTV</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );


}



export default HomeSlider;

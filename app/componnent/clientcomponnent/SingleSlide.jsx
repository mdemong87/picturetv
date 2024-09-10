import Image from "next/image";
import Link from "next/link";

const SingleSlide = ({ image }) => {
    return (
        <div className='relative'>
            <Image className='w-full md:h-full object-cover object-top bannerSlideImage' src={image} alt="Banner-Image" />
            <div className='absolute h-full w-full top-0 flex items-center justify-center bannartransparentBg'>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-3xl text-white font-bold pb-5'>Llewellyn Sánchez-Werner Classical Concert At LongHouse Reserve</h1>
                    <p className='text-base  text-gray-200'>Llewellyn Sánchez-Werner performs in East Hampton, NY</p>
                    <div className='mt-6 md:mt-12'>
                        <Link href={'/ptv'} className='pbg2 py-1 px-3 md:py-3 md:px-5 rounded-md cursor-pointer text-white text-lg font-semibold text-center'>Watch</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleSlide;
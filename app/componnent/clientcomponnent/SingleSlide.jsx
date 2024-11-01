import Image from "next/image";
import Link from "next/link";

const SingleSlide = ({ image, index }) => {


    return (
        <div className='relative'>
            <Image className={`w-full md:h-full object-cover bannerSlideImage ${index == 10 || index == 22 || index == 29 || index == 30 ? "object-center" : index == 5 || index == 7 || index == 11 || index == 16 || index == 21 || index == 23 || index == 25 || index == 27 || index == 28 || index == 14 || index == 20 ? "objectpoostion" : index == 1 || index == 13 ? "object-positon-bootom" : index == 4 || index == 12 || index == 17 || index == 18 || index == 19 || index == 26 ? "object-bootom-two" : index == 24 || index == 3 ? "object-top-10" : "object-top"}`} src={image} width={1000} height={1000} alt="Banner-Image" />
            <div className='absolute h-full w-full top-0 flex items-center justify-center bannartransparentBg'>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-3xl text-white font-bold pb-5'>It&apos;s Picture Time</h1>
                    <p className='text-base  text-gray-200'>Mala Speak Sunday - Black People Have Secret - Celebrity Are My Friend</p>
                    <div className='mt-6 md:mt-12'>
                        <Link href={'/watch'} className='pbg2 py-1 px-3 md:py-3 md:px-5 rounded-md cursor-pointer text-white text-lg font-semibold text-center'>Watch</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleSlide;
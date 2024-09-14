'use client'

import Image from "next/image";


const ImageCard = ({ setcurrentItems, data, singleitems, setshowimageSlide }) => {



    return (
        <div onClick={() => { setshowimageSlide(true), setcurrentItems(singleitems) }} className="w-full h-auto col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3 rounded-md cursor-pointer relative">

            <Image src={singleitems} alt="Image-Card-Image" className="rounded-md object-contain w-full h-[300px]" width={1000} height={1000} />


            {/* <div className="absolute top-0 left-0 w-full h-full rounded-md imageorvedioTransparantBg flex items-end p-4">
                <h3 className="text-white text-base">{data?.fullname}</h3>
            </div> */}




        </div>
    )
}

export default ImageCard;
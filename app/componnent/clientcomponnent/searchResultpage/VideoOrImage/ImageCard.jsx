'use client'

import Image from "next/image";


const ImageCard = ({ setcurrentItems, data, setshowimageSlide }) => {


    return (
        <div onClick={() => { setshowimageSlide(true), setcurrentItems(data) }} className="w-full h-[350px] col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3 rounded-md cursor-pointer relative">
            <Image src={data?.secure_url} alt="Image-Card-Image" className="rounded-md object-cover w-full h-full" width={1000} height={1000} />


            <div className="absolute top-0 left-0 w-full h-full rounded-md imageorvedioTransparantBg flex items-end p-4">
                <h3 className="text-white text-base">Hello Mercedis</h3>
            </div>

















        </div>
    )
}

export default ImageCard;
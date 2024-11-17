'use client'

import { useStore } from "@/lib/store";
import Image from "next/image";

const BookingCard = ({ title, setrander, imgSrc }) => {


    const setshootType = useStore((state) => state.setshootType);



    return (
        <div onClick={() => { setrander(3), setshootType(title) }} className="w-full h-[400px] my-8">
            <div className="w-full pbg2 py-2 text-2xl text-center font-bold rounded-t-md text-gray-200">
                <h3>{title}</h3>
            </div>


            <div className="rounded-b-md h-full cardimagecomponnentImageWrper">
                <Image className="rounded-b-md h-full object-cover portfolioCardHover " src={imgSrc} width={1000} height={1000} alt="portfolio-card-image" />
            </div>
        </div>
    )
}

export default BookingCard;
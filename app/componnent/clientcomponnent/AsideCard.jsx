'use client'

import Image from "next/image";
import thamnal from "../../../public/assets/bg-4.jpg";

const AsideCard = ({ currentvideo, setcurrentvideo, item, index }) => {
    return (
        <div onClick={() => { setcurrentvideo(index) }} className={`rounded-lg w-full h-[130px] cursor-pointer grid grid-cols-10 pbg2 ${index == currentvideo && "border border-4 border-gray-900"}`}>
            <div className="col-span-4 w-full h-full">
                <Image src={thamnal} alt="thamnal" className="object-cover rounded-l-lg w-full h-full" width={1000} height={1000} />
            </div>
            <div className="col-span-6 p-2">
                <h3 className="text-xl pcl3">{item?.title}</h3>
                <p className="text-gray-300 pt-2">{item?.dis}</p>
            </div>
        </div>
    )
}

export default AsideCard;
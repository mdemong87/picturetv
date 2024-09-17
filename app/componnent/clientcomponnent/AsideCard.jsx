'use client'

// import Image from "next/image";
// import thamnal from "../../../public/assets/bg-4.jpg";

const AsideCard = ({ currentvideo, setcurrentvideo, item, index }) => {
    return (
        <div onClick={() => { setcurrentvideo(index) }} className={`rounded-lg w-full h-[160px] cursor-pointer grid grid-cols-10 ${index == currentvideo ? "bg-green-900" : "pbg2"}`}>
            <div className="col-span-4 w-full h-full">

                <video className="w-full rounded-lg h-[160px] overflow-hidden object-cover" autoPlay={false} controls={false}>
                    <source src={item?.file} type="video/mp4" className="" />
                </video>
            </div>
            <div className="col-span-6 p-2">
                <h3 className="text-xl pcl3 line-clamp-2">{item?.title}</h3>
                <p className="text-gray-300 pt-2 line-clamp-3">{item?.dis}</p>
            </div>
        </div>
    )
}

export default AsideCard;
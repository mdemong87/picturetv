import { LocalDateConvart } from "@/lib/helper/LocalDateConvart";
import Image from "next/image";
import Link from "next/link";
import { FaImages } from "react-icons/fa";

const EventCard = ({ data }) => {
    return (
        <Link href={`/dashboard/${data?.eventid}`} className="border shadow-xl col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3 h-fit rounded-md cursor-pointer cardHover">
            <div className="w-full">
                <div className="w-full rounded-t-md cardimagecomponnentImageWrper">
                    <Image src={data?.file[0]?.secure_url} alt="image" width={1000} height={1000} className="rounded-t-md h-[180px] object-cover cardImageForHoverEffect" />
                </div>
                <div className="p-3 bg-white rounded-b-md">
                    <p className="text-gray-400 text-md">{LocalDateConvart(data)}</p>
                    <h3 className="text-gray-600 font-semibold text-xl">{data?.title}</h3>
                    <p className="">
                        <b className="pcl font-semibold">By</b>
                        <span className="text-md text-gray-400 pl-1">{data?.fullname}</span>
                    </p>
                    <div className="mt-4">
                        <div className="flex gap-3 items-center">

                            <div className="flex gap-3 px-3 py-1 rounded-md items-center pbg3">
                                <FaImages className="text-xl text-gray-500" />
                                <span className="text-gray-500 font-semibold">{data?.file?.length}</span>
                            </div>

                            <div className={`flex gap-1 px-1 py-0 rounded-md items-center ${data?.isApproved ? "bg-green-200" : "bg-red-200"}`}>
                                <span className="text-gray-600 px-3 py-1 font-semibold">
                                    {
                                        data?.isApproved ? "Approved" : "Disapproved"
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default EventCard;
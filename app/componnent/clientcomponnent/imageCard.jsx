import Image from "next/image";
import { FaCloudDownloadAlt, FaEye } from "react-icons/fa";
import image from "../../../public/assets/bg-3.jpg";

const ImageCard = () => {
    return (
        <div className="border bg-white shadow-xl col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3 h-fit rounded-md cursor-pointer hover:cardHover">
            <div>
                <div>
                    <Image src={image} alt="image" width={1000} height={1000} className="rounded-t-md h-[180px] object-cover" />
                </div>
                <div className="p-3">
                    <p className="text-gray-400 text-md">3 Auggest, 2024</p>
                    <h3 className="text-gray-600 font-semibold text-xl">Lorem ipsum dolor sit amet consectetur</h3>
                    <p className="">
                        <b className="pcl2 font-semibold">By</b>
                        <span className="text-md text-gray-400 pl-1">John sony</span>
                    </p>
                    <div className="mt-4">
                        <div className="flex gap-3 items-center">

                            <div className="flex gap-1 px-2 py-1 rounded-md items-center pbg3">
                                <FaEye className="text-xl text-gray-400" />
                                <span className="text-gray-400 font-semibold">768</span>
                            </div>

                            <div className="flex gap-1 px-2 py-1 rounded-md items-center pbg3">
                                <FaCloudDownloadAlt className="text-xl text-gray-400" />
                                <span className="text-gray-400 font-semibold">64</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageCard;
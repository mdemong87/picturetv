'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../../../../public/assets/logo-2.png";


const ImageCard = ({ setcurrentItems, data, singleitems, setshowimageSlide, session }) => {


    const router = useRouter();

    //handle show function is here
    function handleShow() {
        if (!session?.role) {
            router.push('/auth/login');
        } else {
            setshowimageSlide(true);
            setcurrentItems(singleitems);
        }
    }

    return (
        <div onClick={() => { handleShow() }} className="w-full h-auto col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-2 rounded-md cursor-pointer relative">

            <Image src={singleitems} alt="Image-Card-Image" className="rounded-md object-cover object-top w-full h-[280px]" width={1000} height={1000} />


            <div className="absolute top-0 left-0 w-full h-full rounded-md imageorvedioTransparantBg flex items-end justify-start p-4">

                <div className="w-full">
                    <div className="flex justify-end">
                        <Image className="w-[75px] opacitylogo" src={logo} width={1000} height={1000} alt="logo" />
                    </div>
                    <h3 className="text-white text-base">{data?.fullname}</h3>
                </div>
            </div>




        </div>
    )
}

export default ImageCard;
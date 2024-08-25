'use client'

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import actor from "../../../../public/assets/bg-4.jpg";


const ActorHeadShortCard = ({ setshowimageSlide }) => {
    return (

        <div onClick={() => { setshowimageSlide(true) }} className="w-full col-span-12 md:col-span-6 lg:col-span-3 relative top-0 left-0">
            <Image className="rounded-md h-[400px] object-cover" src={actor} width={1000} height={1000} alt="Actor-headshort" />
            <div className="absolute w-full h-full -translate-y-[100%] actorheadshotTransparantBg flex items-end pb-8 justify-center rounded-md">

                <div className="flex items-center justify-center gap-3">

                    <Link target="Blank" className="p-3 pbg2 rounded-full" href={'/'}>
                        <FaFacebookF className="text-xl text-white" />
                    </Link>
                    <Link target="Blank" className="p-3 pbg2 rounded-full" href={'/'}>
                        <FaInstagram className="text-xl text-white" />
                    </Link>
                    <Link target="Blank" className="p-3 pbg2 rounded-full" href={'/'}>
                        <FaLinkedinIn className="text-xl text-white" />
                    </Link>
                    <Link target="Blank" className="p-3 pbg2 rounded-full" href={'/'}>
                        <FaTwitter className="text-xl text-white" />
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default ActorHeadShortCard;
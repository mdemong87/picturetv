'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const ActorHeadShortCard = ({ data }) => {


    const [showimageSlide, setshowimageSlide] = useState(false);
    let [currentIndex, setcurrentIndex] = useState(0);

    const allImage = data?.file;

    //for right arror function
    function CurrentIndexIncrise() {

        if (currentIndex < allImage.length - 1) {
            setcurrentIndex(currentIndex + 1);
        }
    }

    //for left arror function
    function CurrecntIndexDecrrese() {
        if (currentIndex > 0) {
            setcurrentIndex(currentIndex - 1);
        }
    }




    return (

        <div onClick={() => { setshowimageSlide(true) }} className="w-full col-span-12 md:col-span-6 lg:col-span-3 relative top-0 left-0">
            <Image className="rounded-md h-[400px] object-cover" src={data?.file[0]?.secure_url} width={1000} height={1000} alt="Actor-headshort" />
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



            {
                showimageSlide && <div className="fixed top-0 left-0 w-full bannartransparentBgforActor h-screen z-50">
                    <div className="w-full flex justify-end p-2">
                        <div onClick={() => { setshowimageSlide(false) }} className="pbg2 bg-red-00rounded-md w-[43px] rounded=-md flex items-center justify-center h-[43px] cursor-pointer hover:rotate-180 transition duration-500">
                            <RxCross2 className="text-white text-3xl" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <b className="text-white text-center w-full">{currentIndex + 1}/{data?.file?.length}</b>
                    </div>
                    <div className="flex justify-between gap-3 md:gap-0 items-center h-full w-full">
                        <div>
                            <div onClick={() => { CurrecntIndexDecrrese() }} className="w-[60px] h-[60px] rounded-full pbg2 flex items-center justify-center cursor-pointer">
                                <FaAngleLeft className="text-4xl text-white" />
                            </div>
                        </div>
                        <div>
                            <Image src={data?.file[currentIndex]?.secure_url} width={1000} height={1000} alt="Slide-Image" />
                        </div>
                        <div>
                            <div onClick={() => { CurrentIndexIncrise() }} className="w-[60px] h-[60px] rounded-full pbg2 flex items-center justify-center cursor-pointer">
                                <FaAngleRight className="text-4xl text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default ActorHeadShortCard;
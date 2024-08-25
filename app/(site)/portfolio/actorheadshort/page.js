'use client'

const { default: Container } = require("@/app/componnent/clientcomponnent/Container")
import ActorHeadShortCard from "@/app/componnent/clientcomponnent/portfolio/ActorHeadshortCard";
import Image from "next/image";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import slide from "../../../../public/assets/bg-2.jpg";


const ActorHeadShorts = () => {


    const [showimageSlide, setshowimageSlide] = useState(false);


    return (
        <main className="h-fit pt-36 pb-14">
            <Container>
                <div className="grid grid-cols-12 gap-5">

                    <ActorHeadShortCard setshowimageSlide={setshowimageSlide} />
                    <ActorHeadShortCard setshowimageSlide={setshowimageSlide} />
                    <ActorHeadShortCard setshowimageSlide={setshowimageSlide} />
                    <ActorHeadShortCard setshowimageSlide={setshowimageSlide} />
                    <ActorHeadShortCard setshowimageSlide={setshowimageSlide} />
                    <ActorHeadShortCard setshowimageSlide={setshowimageSlide} />
                    <ActorHeadShortCard setshowimageSlide={setshowimageSlide} />
                    <ActorHeadShortCard setshowimageSlide={setshowimageSlide} />


                    {
                        showimageSlide && <div className="fixed top-0 left-0 w-full bannartransparentBgforActor h-screen z-50">
                            <div className="w-full flex justify-end">
                                <div onClick={() => { setshowimageSlide(false) }} className="pbg2 rounded-md w-[43px] flex items-center justify-center h-[43px] cursor-pointer">
                                    <RxCross2 className="text-white text-3xl" />
                                </div>
                            </div>
                            <div className="flex justify-between gap-3 md:gap-0 items-center h-full w-full">
                                <div>
                                    <div className="w-[60px] h-[60px] rounded-full pbg2 flex items-center justify-center cursor-pointer">
                                        <FaAngleLeft className="text-4xl text-white" />
                                    </div>
                                </div>
                                <div>
                                    <Image src={slide} width={1000} height={1000} alt="Slide-Image" />
                                </div>
                                <div>
                                    <div className="w-[60px] h-[60px] rounded-full pbg2 flex items-center justify-center cursor-pointer">
                                        <FaAngleRight className="text-4xl text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </Container>
        </main>
    )
}

export default ActorHeadShorts;
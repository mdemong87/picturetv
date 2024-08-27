'use client'

import Container from "@/app/componnent/clientcomponnent/Container";
import ImageCard from "@/app/componnent/clientcomponnent/searchResultpage/VideoOrImage/ImageCard";
import Image from "next/image";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import slide from "../../../../../public/assets/bg-3.jpg";
import logo from "../../../../../public/assets/logo-2.png";


const ImagePage = () => {

    const [showimageSlide, setshowimageSlide] = useState(false);

    return (
        <main className="h-fit pt-36 pb-14">
            <Container>
                <div className="w-full grid gap-3 grid-cols-12 items-center">
                    <ImageCard setshowimageSlide={setshowimageSlide} />
                    <ImageCard setshowimageSlide={setshowimageSlide} />
                    <ImageCard setshowimageSlide={setshowimageSlide} />
                    <ImageCard setshowimageSlide={setshowimageSlide} />
                    <ImageCard setshowimageSlide={setshowimageSlide} />
                    <ImageCard setshowimageSlide={setshowimageSlide} />
                    <ImageCard setshowimageSlide={setshowimageSlide} />
                    <ImageCard setshowimageSlide={setshowimageSlide} />
                    <ImageCard setshowimageSlide={setshowimageSlide} />
                    <ImageCard setshowimageSlide={setshowimageSlide} />
                    <ImageCard setshowimageSlide={setshowimageSlide} />
                    <ImageCard setshowimageSlide={setshowimageSlide} />
                </div>



                {
                    showimageSlide && <div className="fixed top-0 left-0 w-full bannartransparentBgforActor h-screen z-50 py-6 overflow-y-scroll">
                        <div className="w-full flex justify-end mb-4 lg:mb-0">
                            <div onClick={() => { setshowimageSlide(false) }} className="pbg2 rounded-md w-[43px] flex items-center justify-center h-[43px] cursor-pointer">
                                <RxCross2 className="text-white text-3xl" />
                            </div>
                        </div>


                        <Container>
                            <div className="sinpleImageGrid h-screen w-full">
                                <div className="w-full flex flex-col gap-3 justify-center sinpleImageGridLeft">
                                    <div>
                                        <h5 className="text-white text-base">People:</h5>
                                        <p className="text-gray-300">Emily Chon</p>
                                    </div>
                                    <div>
                                        <h5 className="text-white text-base">Gallery Title:</h5>
                                        <p className="text-gray-300">Rotate SS25 Show</p>
                                    </div>
                                    <div>
                                        <h5 className="text-white text-base">Location:</h5>
                                        <p className="text-gray-300">Garden of The Royal Library, Copenhagen, Denmark</p>
                                    </div>
                                    <div>
                                        <h5 className="text-white text-base">Date:</h5>
                                        <p className="text-gray-300">Thu, Aug 08 2024</p>
                                    </div>
                                    <div>
                                        <h5 className="text-white text-base">Photo Credit:</h5>
                                        <p className="text-gray-300">Emily Chon</p>
                                    </div>
                                    <div>
                                        <h5 className="text-white text-base">People:</h5>
                                        <p className="text-gray-300">Thomas Razzano/PictureTV.com</p>
                                    </div>
                                    <div>
                                        <h5 className="text-white text-base">Editor Credit:</h5>
                                        <p className="text-gray-300">Thomas Razzano/PictureTV.com</p>
                                    </div>
                                    <div>
                                        <h5 className="text-white text-base">Copyright Owner:</h5>
                                        <p className="text-gray-300">© PictureTV.com 2024</p>
                                    </div>
                                </div>
                                <div className="w-full sinpleImageGridCenter">
                                    <Image src={slide} className="w-full object-cover h-[520px]" width={1000} height={1000} alt="Slide-Image" />
                                </div>
                                <div className="w-full sinpleImageGridRight">
                                    <div>
                                        <select className='w-full bg-gray-800 text-white border p-3 mb-5 rounded-md'>
                                            <option value="Digital Download">Digital Download </option>
                                            <option value="Physical Print">Physical Print</option>
                                        </select>

                                        <select className='w-full bg-gray-800 text-white border p-3 rounded-md'>
                                            <option value="Web Edition (Single Use) ">Web Edition (Single Use) </option>
                                            <option value="PR Usage (Multi Use)">PR Usage (Multi Use)</option>
                                            <option value="Print (Single use)">Print (Single use)</option>
                                            <option value="Web And Print (Single Use)">Web And Print (Single Use)</option>
                                        </select>

                                        <h2 className="my-5 text-white text-3xl font-bold">$85.0</h2>
                                        <button className="rounded-md p-3 text-2xl pbg2 text-white w-full">Download</button>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <Image className="w-[170px]" src={logo} width={1000} height={1000} alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </Container>

                    </div>
                }

            </Container>
        </main>
    )
}


export default ImagePage;
import Container from "@/app/componnent/clientcomponnent/Container";
import Image from "next/image";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import logo from '../../../public/assets/logo-2.png';



const SinglePageSingleItemsForMedia = ({ setshowimageSlide, currentEventData, currentItems, handleDownload, setprice, price }) => {



    const [downloadtype, setdownloadtype] = useState('Digital Download');




    return (
        <div className="fixed top-0 left-0 w-full bannartransparentBgforActor h-screen z-50 py-6 overflow-y-scroll">
            <div className="w-full flex justify-end mb-4 lg:mb-0">
                <div onClick={() => { setshowimageSlide(false) }} className="pbg2 rounded-md w-[43px] flex items-center justify-center h-[43px] cursor-pointer hover:rotate-180 transition duration-500">
                    <RxCross2 className="text-white text-3xl" />
                </div>
            </div>


            <Container>
                <div className="sinpleImageGrid h-screen w-full">
                    <div className="w-full flex flex-col gap-3 justify-center sinpleImageGridLeft">
                        <div>
                            <h5 className="text-white text-base">People:</h5>
                            <p className="text-gray-300">{currentEventData?.fullname}</p>
                        </div>
                        <div>
                            <h5 className="text-white text-base">Event Title:</h5>
                            <p className="text-gray-300">{currentEventData?.title}</p>
                        </div>
                        <div>
                            <h5 className="text-white text-base">Event Type:</h5>
                            <p className="text-gray-300">{currentEventData?.eventtype}</p>
                        </div>
                        <div>
                            <h5 className="text-white text-base">Location:</h5>
                            <p className="text-gray-300">Garden of The Royal Library, Copenhagen, Denmark</p>
                        </div>
                        <div>
                            <h5 className="text-white text-base">Date:</h5>
                            <p className="text-gray-300">Spring Fall Winter</p>
                        </div>
                        <div>
                            <h5 className="text-white text-base">Editor Credit:</h5>
                            <p className="text-gray-300">Picture TV</p>
                        </div>
                        <div>
                            <h5 className="text-white text-base">Copyright Owner:</h5>
                            <p className="text-gray-300">© PictureTV.com 2024</p>
                        </div>
                    </div>
                    <div className="w-full sinpleImageGridCenter relative">
                        <Image src={currentItems} className="w-full object-contain h-[750px]" width={1000} height={1000} alt="Slide-Image" />
                        <div className="absolute w-full h-full transbgforprotect flex justify-center items-end bottom-0 right-0 left-0 opacitylogo">
                            <Image className="w-[240px] translate-x-16 -translate-y-12" src={logo} width={1000} height={1000} alt="logo" />
                        </div>
                    </div>
                    <div className="w-full sinpleImageGridRight">
                        <div>

                            <div className="w-full mb-5 flex items-center justify-between gap-5">
                                <button onClick={(e) => { setdownloadtype(e.target.value) }} value={"Digital Download"} className={`${downloadtype == "Digital Download" ? "pbg2" : "bg-gray-800"} text-white border p-3 rounded-md w-full`}>Digital Download</button>
                                <button onClick={(e) => { setdownloadtype(e.target.value) }} value={'Physical Print'} className={`${downloadtype == "Physical Print" ? "pbg2" : "bg-gray-800"} text-white border p-3 rounded-md w-full`}>Physical Print</button>
                            </div>

                            {
                                downloadtype == "Digital Download" ? (

                                    <select onChange={(e) => { setprice(e.target.value) }} className='w-full bg-gray-800 text-white border p-3 rounded-md'>
                                        <option value="55">Web Edition (Single Use) </option>
                                        <option value="400">PR Usage (Multi Use)</option>
                                        <option value="170">Print (Single use)</option>
                                        <option value="225">Web And Print (Single Use)</option>
                                    </select>

                                ) : (
                                    <select onChange={(e) => { setprice(e.target.value) }} className='w-full bg-gray-800 text-white border p-3 rounded-md'>
                                        <option value="10">4*6</option>
                                        <option value="20">5*7</option>
                                        <option value="30">8*10</option>
                                        <option value="40">11*14</option>
                                    </select>
                                )
                            }



                            <h2 className="my-5 text-white text-3xl font-bold">{`$ ${price}.00`}</h2>
                            <button onClick={() => { handleDownload() }} className="rounded-md p-3 text-2xl pbg2 text-white w-full">Download</button>
                        </div>

                    </div>
                </div>
            </Container>

        </div>
    )
}

export default SinglePageSingleItemsForMedia;
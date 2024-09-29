import Container from "@/app/componnent/clientcomponnent/Container";
import Image from "next/image";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import logo from '../../../public/assets/logo-2.png';



const SinglePageSingleItemsForMedia = ({ setshowimageSlide, currentEventData, currentItems, handleDownload, setprice, price, currentIndex, setcurrentIndex }) => {



    const [downloadtype, setdownloadtype] = useState('Digital Download');






    return (
        <div className="fixed top-0 left-0 w-full bannartransparentBgforActor h-screen z-50 py-6 overflow-y-scroll">
            <div className="w-full flex justify-end mb-4 lg:mb-0">
                <div onClick={() => { setshowimageSlide(false) }} className="pbg2 rounded-md w-[43px] flex items-center justify-center h-[43px] cursor-pointer hover:rotate-180 transition duration-500">
                    <RxCross2 className="text-white text-3xl" />
                </div>
            </div>


            <Container>
                <div className="text-white mt-3 mb-1 flex justify-between items-center">

                    <div onClick={() => { currentIndex > 1 && setcurrentIndex(currentIndex - 1) }} className="w-[40px] h-[40px] rounded-full pbg2 flex items-center justify-center cursor-pointer">
                        <FaAngleLeft className="text-xl text-white" />
                    </div>

                    <div>
                        <b className="text-white text-center pbg2 text-white p-1 rounded-md w-fit">{
                            `${currentIndex}/${(currentEventData?.file?.length - 1)}`
                        }</b>
                    </div>
                    <div onClick={() => { currentIndex < (currentEventData?.file?.length - 1) && setcurrentIndex(currentIndex + 1) }} className="w-[40px] h-[40px] rounded-full pbg2 flex items-center justify-center cursor-pointer">
                        <FaAngleRight className="text-xl text-white" />
                    </div>
                </div>
                <div className="sinpleImageGrid h-screen w-full">
                    <div className="w-full flex flex-col gap-3 justify-center sinpleImageGridLeft">
                        {
                            currentEventData?.fullname != "NAWIC" && <div>
                                <h5 className="text-white text-base">{`${currentEventData?.fullname == "The Fashion Group International" || currentEventData?.fullname == "Honoring To Short, Sway Lil John" ? "People:" : "Designer:"}`} </h5>
                                <p className="text-gray-300">{currentEventData?.fullname}</p>
                            </div>
                        }
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
                            <p className="text-gray-300">{currentEventData?.Location}</p>
                        </div>
                        <div>
                            <h5 className="text-white text-base">Date:</h5>
                            <p className="text-gray-300">{currentEventData?.Eventdate}</p>
                        </div>
                        <div>
                            <h5 className="text-white text-base">Editor Credit:</h5>
                            <p className="text-gray-300">Picture TV</p>
                        </div>
                        <div>
                            <h5 className="text-white text-base">Copyright Owner:</h5>
                            <p className="text-gray-300">© PictureTV.net 2024</p>
                        </div>
                    </div>
                    <div className="w-full sinpleImageGridCenter relative">
                        <Image src={currentEventData?.file[currentIndex]} className="w-full object-contain h-[750px]" width={1000} height={1000} alt="Slide-Image" />
                        <div className="absolute w-full h-full transbgforprotect flex justify-center items-end bottom-0 right-0 left-0 opacitylogo">
                            <Image className="w-[275px] translate-x-16 -translate-y-12" src={logo} width={1000} height={1000} alt="logo" />
                        </div>
                    </div>
                    <div className="w-full sinpleImageGridRight">
                        <div>

                            <div className="w-full mb-5 flex items-center justify-between gap-5">
                                <button onClick={(e) => { setdownloadtype(e.target.value), setprice('55') }} value={"Digital Download"} className={`${downloadtype == "Digital Download" ? "pbg2" : "bg-gray-800"} text-white border p-3 rounded-md w-full`}>Digital Download</button>
                                <button onClick={(e) => { setdownloadtype(e.target.value), setprice('10') }} value={'Physical Print'} className={`${downloadtype == "Physical Print" ? "pbg2" : "bg-gray-800"} text-white border p-3 rounded-md w-full`}>Physical Print</button>
                            </div>

                            {
                                downloadtype == "Digital Download" ? (

                                    <select onChange={(e) => { setprice(e.target.value) }} className='w-full bg-gray-800 text-white border p-3 rounded-md'>
                                        <option value="55">Web Edition (Single Use) </option>
                                        <option value="400">PR Usage (Multi Use)</option>
                                        <option value="150">Print (Single use)</option>
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
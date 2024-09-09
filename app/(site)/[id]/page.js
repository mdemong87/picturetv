'use client'

import Container from "@/app/componnent/clientcomponnent/Container";
import ImageOrVideoBtn from "@/app/componnent/clientcomponnent/ImageOrVideoBtn";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import logo from "../../../public/assets/logo-2.png";
import ImageCard from "../../componnent\/clientcomponnent/searchResultpage/VideoOrImage/ImageCard";



const SingleAllEventPage = ({ params }) => {


    const id = params?.id;
    const [data, setdata] = useState({});
    const [showimageSlide, setshowimageSlide] = useState(false);
    const [currentItems, setcurrentItems] = useState();
    const [isImage, setisImage] = useState(true);


    useEffect(() => {

        const GetSingleEvent = async (id) => {
            try {

                //fetch data event data from the api/dashboard
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/allevent/${id}`);
                const response = await res.json();

                //update the data variable
                setdata(response);

            } catch (error) {
                console.log("Fetching Single Event Failed");
            }
        }


        GetSingleEvent(id);

    }, [id])



    return (
        <main className="pt-28 pb-6">
            <Container>
                <div>



                    <div className="flex items-center justify-center w-full">
                        <ImageOrVideoBtn isImage={isImage} setisImage={setisImage} />
                    </div>


                    {
                        isImage ? (
                            <div className="w-full grid gap-3 grid-cols-12 items-center">

                                {


                                    data?.data?.file?.map((singleData, index) => {
                                        return (
                                            <ImageCard key={index} setcurrentItems={setcurrentItems} data={singleData} showimageSlide={showimageSlide} setshowimageSlide={setshowimageSlide} />
                                        )
                                    })


                                }
                            </div>
                        ) : (
                            <div className="w-full flex items-center justify-center">
                                <h1 className="py-20 text-3xl text-gray-700 font-bold text-center">Coming Soon...</h1>
                            </div>
                        )
                    }





                    {
                        showimageSlide && <div className="fixed top-0 left-0 w-full bannartransparentBgforActor h-screen z-50 py-6 overflow-y-scroll">
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
                                            <p className="text-gray-300">{data?.data?.fullname}</p>
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
                                        <Image src={currentItems?.secure_url} className="w-full object-cover h-[520px]" width={1000} height={1000} alt="Slide-Image" />
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





                </div>
            </Container>
        </main>
    )
}

export default SingleAllEventPage;
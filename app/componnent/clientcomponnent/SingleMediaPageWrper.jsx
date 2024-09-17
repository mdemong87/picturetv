'use client'

import BackBtn from "@/app/componnent/BackBtn";
import Container from "@/app/componnent/clientcomponnent/Container";
import ImageOrVideoBtn from "@/app/componnent/clientcomponnent/ImageOrVideoBtn";
import Loading from "@/app/componnent/clientcomponnent/Loading";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import eventdata from "../../../data/EventData";
import ImageCard from "../../componnent/clientcomponnent/searchResultpage/VideoOrImage/ImageCard";
import ForwordBtn from "../ForwordBtn";
import SinglePageSingleItemsForMedia from "./SinglePageSingleItemsforMedia";


const SingleMediaPageWrper = ({ id, session }) => {

    const updateImage_Url = useStore((state) => state.updateImage_Url);
    const Image_Url = useStore((state) => state.Image_Url);

    const [data, setdata] = useState({});
    const [showimageSlide, setshowimageSlide] = useState(false);
    const [currentItems, setcurrentItems] = useState();
    const [isImage, setisImage] = useState(true);
    const [isloading, setisloading] = useState(false);
    const [isloginshow, setisloginshow] = useState(false);
    const [price, setprice] = useState("55");





    //filter out the current data
    const singledata = eventdata?.filter((items) => {

        return items.eventid == id;
    })


    //router instance
    const router = useRouter();



    useEffect(() => {
        updateImage_Url(currentItems);
    }, [currentItems])



    //handle image download function
    const handleDownload = async () => {

        setisloading(true);

        try {



            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/payment-checkout`, {
                method: 'POST',
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({
                    price
                })

            })

            const res = await response.json();


            if (res.success) {
                setisloading(false);
                router.push(res?.paymentData?.url);

            } else {
                setisloading(false);
                toast.error("There was a server side Problem");
            }


        } catch (error) {
            setisloading(false);
            console.log(error);
            toast.error("There was a server side Problem");
        }

    }



    return (
        <div>
            {isloading && <Loading />}

            <Container>
                <div>



                    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                        <div className="flex justify-between md:justify-start items-center gap-4 w-full">
                            {
                                id == '1' ? (
                                    <BackBtn link={'/'} />
                                ) : (
                                    <BackBtn link={`/${Number(id) - 1}`} />
                                )
                            }
                            <ForwordBtn link={`/${Number(id) + 1}`} />
                        </div>
                        <ImageOrVideoBtn isImage={isImage} setisImage={setisImage} />
                    </div>


                    {
                        isImage ? (
                            <div className="w-full grid gap-6 grid-cols-12 items-center">

                                {


                                    singledata[0]?.file?.map((singleData, index) => {
                                        return (
                                            index > 0 && <ImageCard key={index} setcurrentItems={setcurrentItems} data={singledata[0]} singleitems={singleData} showimageSlide={showimageSlide} setshowimageSlide={setshowimageSlide} session={session} />
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
                        showimageSlide && <SinglePageSingleItemsForMedia setshowimageSlide={setshowimageSlide} currentEventData={singledata[0]} currentItems={currentItems} handleDownload={handleDownload} setprice={setprice} price={price} />
                    }

                    {/* {
                        isloginshow && <PerchasLogin setisloginshow={setisloginshow} />
                    } */}




                </div>
            </Container>
            <ToastContainer />
        </div>
    )
}

export default SingleMediaPageWrper;
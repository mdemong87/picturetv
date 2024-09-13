'use client'

import BackBtn from "@/app/componnent/BackBtn";
import Container from "@/app/componnent/clientcomponnent/Container";
import ImageOrVideoBtn from "@/app/componnent/clientcomponnent/ImageOrVideoBtn";
import Loading from "@/app/componnent/clientcomponnent/Loading";
import { useRouter } from "next/navigation";
import { useState } from "react";
import eventdata from "../../../data/EventData";
import ImageCard from "../../componnent/clientcomponnent/searchResultpage/VideoOrImage/ImageCard";
import SinglePageSingleItemsForMedia from "./SinglePageSingleItemsforMedia";


const SingleMediaPageWrper = ({ id, session }) => {



    const [data, setdata] = useState({});
    const [showimageSlide, setshowimageSlide] = useState(false);
    const [currentItems, setcurrentItems] = useState();
    const [isImage, setisImage] = useState(true);
    const [isloading, setisloading] = useState(false);
    const [isloginshow, setisloginshow] = useState(false);




    //filter out the current data
    const singledata = eventdata?.filter((items) => {

        return items.eventid == id;
    })


    //router instance
    const router = useRouter();


    //handle image download function
    const handleDownload = () => {


        setisloading(true);


        if (!session?.role) {
            setisloading(false);
            router.push('/auth/loginforperchas');
        } else {



            setTimeout(() => {
                setisloading(false);
            }, 3000);
        }



    }



    return (
        <div>
            {isloading && <Loading />}

            <Container>
                <div>



                    <div className="flex items-center justify-between w-full">
                        <BackBtn link={'/'} />
                        <ImageOrVideoBtn isImage={isImage} setisImage={setisImage} />
                    </div>


                    {
                        isImage ? (
                            <div className="w-full grid gap-3 grid-cols-12 items-center">

                                {


                                    singledata[0]?.file?.map((singleData, index) => {
                                        return (
                                            index > 1 && <ImageCard key={index} setcurrentItems={setcurrentItems} data={singledata[0]} singleitems={singleData} showimageSlide={showimageSlide} setshowimageSlide={setshowimageSlide} />
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
                        showimageSlide && <SinglePageSingleItemsForMedia setshowimageSlide={setshowimageSlide} currentEventData={singledata[0]} currentItems={currentItems} handleDownload={handleDownload} />
                    }

                    {/* {
                        isloginshow && <PerchasLogin setisloginshow={setisloginshow} />
                    } */}




                </div>
            </Container>
        </div>
    )
}

export default SingleMediaPageWrper;
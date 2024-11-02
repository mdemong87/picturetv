'use client'

import BackBtn from "@/app/componnent/BackBtn";
import Container from "@/app/componnent/clientcomponnent/Container";
import ImageOrVideoBtn from "@/app/componnent/clientcomponnent/ImageOrVideoBtn";
import Loading from "@/app/componnent/clientcomponnent/Loading";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageCard from "../../componnent/clientcomponnent/searchResultpage/VideoOrImage/ImageCard";
import ForwordBtn from "../ForwordBtn";
import SinglePageSingleItemsForMedia from "./SinglePageSingleItemsforMedia";


const SingleMediaPageWrper = ({ id, singledata, nextLink, prevLink }) => {

    const setmycart = useStore((state) => state.setmycart);
    const mycart = useStore((state) => state.mycart);

    const router = useRouter();

    const [data, setdata] = useState({});
    const [showimageSlide, setshowimageSlide] = useState(false);
    const [currentItems, setcurrentItems] = useState();
    const [isImage, setisImage] = useState(true);
    const [isloading, setisloading] = useState(false);
    const [isloginshow, setisloginshow] = useState(false);
    const [price, setprice] = useState("55");
    const [currentIndex, setcurrentIndex] = useState(0);


    //handle image download function
    const handleDownload = () => {

        setisloading(true);


        //push current shoping items in the global shoping cart array state
        mycart.push({
            allinfo: singledata[0],
            currentImage: singledata[0]?.file[currentIndex],
            price: price
        });

        router.refresh();


        toast.success("Item Added to Cart Successfully");

        setTimeout(() => {
            // setshowimageSlide(false);
            setisloading(false);
        }, 1000);



    }



    return (
        <div>
            {isloading && <Loading />}

            <Container>
                <div>
                    <div className="flex flex-col md:flex-row items-center justify-between w-full mb-6 gap-4">
                        <div className="flex justify-between md:justify-start items-center gap-4 w-full">
                            <BackBtn link={prevLink} />
                            <ForwordBtn link={nextLink} />
                        </div>
                        <ImageOrVideoBtn isImage={isImage} setisImage={setisImage} />
                    </div>


                    {
                        isImage ? (
                            <div className="w-full grid gap-6 grid-cols-12 items-center">

                                {


                                    singledata[0]?.file?.map((singleData, index) => {
                                        return (
                                            index > 0 && <ImageCard key={index} setcurrentItems={setcurrentItems} data={singledata[0]} singleitems={singleData} showimageSlide={showimageSlide} setshowimageSlide={setshowimageSlide} index={index} setcurrentIndex={setcurrentIndex} />
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
                        showimageSlide && <SinglePageSingleItemsForMedia setshowimageSlide={setshowimageSlide} currentEventData={singledata[0]} currentItems={currentItems} handleDownload={handleDownload} setprice={setprice} price={price} currentIndex={currentIndex} setcurrentIndex={setcurrentIndex} />
                    }


                </div>
            </Container>
            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    )
}

export default SingleMediaPageWrper;
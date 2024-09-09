'use client'

const { default: Container } = require("@/app/componnent/clientcomponnent/Container")
import ActorHeadShortCard from "@/app/componnent/clientcomponnent/portfolio/ActorHeadshortCard";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";







const ActorHeadShorts = () => {


    //find the dynamic path name
    const { category } = useParams();


    //local state diclire
    const [data, setdata] = useState({});
    let [currentIndex, setcurrentIndex] = useState(0);
    const [currentItem, setcurrentItem] = useState();
    const [showimageSlide, setshowimageSlide] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/allportfolio/${category}`);
                const data = await res.json();

                // Set your data to state here if needed
                setdata(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [category]);




    //for right arror function
    function CurrentIndexIncrise() {

        if (currentIndex < currentItem?.file?.length - 1) {
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
        <main className="h-fit pt-36 pb-14">
            <Container>
                <div className="grid grid-cols-12 gap-5">

                    {
                        data?.data?.map((singleitem, index) => {
                            return (
                                <ActorHeadShortCard key={index} data={singleitem} setshowimageSlide={setshowimageSlide} currentIndex={currentIndex} setcurrentIndex={setcurrentIndex} setcurrentItem={setcurrentItem} />
                            )
                        })
                    }


                </div>
            </Container>


            {
                showimageSlide && <div className="fixed top-0 left-0 w-full bannartransparentBgforActor h-screen z-50">
                    <div className="w-full flex justify-end p-2">
                        <div onClick={() => { setshowimageSlide(false) }} className="pbg2 bg-red-00rounded-md w-[43px] rounded=-md flex items-center justify-center h-[43px] cursor-pointer hover:rotate-180 transition duration-500">
                            <RxCross2 className="text-white text-3xl" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <b className="text-white text-center w-full">{currentIndex + 1}/{currentItem?.file?.length}</b>
                    </div>
                    <div className="flex justify-between gap-3 md:gap-0 items-center h-full w-full">
                        <div>
                            <div onClick={() => { CurrecntIndexDecrrese() }} className="w-[60px] h-[60px] rounded-full pbg2 flex items-center justify-center cursor-pointer">
                                <FaAngleLeft className="text-4xl text-white" />
                            </div>
                        </div>
                        <div>
                            <Image src={currentItem?.file[currentIndex]?.secure_url} width={1000} height={1000} alt="Slide-Image" />
                        </div>
                        <div>
                            <div onClick={() => { CurrentIndexIncrise() }} className="w-[60px] h-[60px] rounded-full pbg2 flex items-center justify-center cursor-pointer">
                                <FaAngleRight className="text-4xl text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            }

        </main>
    )
}

export default ActorHeadShorts;
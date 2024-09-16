'use client'

const { default: Container } = require("@/app/componnent/clientcomponnent/Container")
import ActorHeadShortCard from "@/app/componnent/clientcomponnent/portfolio/ActorHeadshortCard";
import portfolioImagedata from "@/data/portfolioData";
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
        const filterdata = portfolioImagedata?.filter((item) => {
            const filteritem = item?.category == category;
            return filteritem;
        })

        setdata(filterdata);

    }, [category]);




    //for right arror function




    function CurrentIndexIncrise() {

        if (currentIndex < data[0]?.file?.length - 1) {
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
                        data[0]?.file?.map((singleitem, index) => {
                            return (
                                <ActorHeadShortCard key={index} data={singleitem} setshowimageSlide={setshowimageSlide} index={index} setcurrentIndex={setcurrentIndex} />
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
                    <div className="flex justify-center w-full items-center z-30">
                        <b className="text-white text-center pbg2 text-white p-1 rounded-md w-fit">{currentIndex + 1}/{data[0]?.file?.length}</b>
                    </div>
                    <div className="flex justify-between gap-3 md:gap-0 items-center h-full w-full">
                        <div>
                            <div onClick={() => { CurrecntIndexDecrrese() }} className="w-[60px] h-[60px] rounded-full pbg2 flex items-center justify-center cursor-pointer">
                                <FaAngleLeft className="text-4xl text-white" />
                            </div>
                        </div>
                        <div className="-z-10">
                            <Image src={data[0]?.file[currentIndex]} className="w-[700px] object-cover" width={1000} height={1000} alt="Slide-Image" />
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
'use client'

import AsideCard from "@/app/componnent/clientcomponnent/AsideCard";
import Container from "@/app/componnent/clientcomponnent/Container";
import Vedio from "@/app/componnent/clientcomponnent/Vedio";
import ptv from "@/data/video/Ptv";
import { useState } from "react";


const PTV = () => {

    const [currentvideo, setcurrentvideo] = useState(ptv[0]);

    console.log(currentvideo);

    return (
        <main className="h-fit pt-36 pb-14">
            <Container>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-8 w-full">
                        <div className="h-[520px] w-full">
                            <Vedio currentvideo={currentvideo} />
                        </div>
                        <div className="bg-white rounded-lg mt-1 p-3 h-[90px]">
                            <h3 className="text-xl text-gray-700">See You Again Lorem, ipsum dolor. and hello</h3>
                            <p className="text-gray-500 pt-2">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <aside className="col-span-12 lg:col-span-4 flex flex-col gap-4 w-full h-full">

                        {
                            ptv?.map((item, index) => {
                                return (
                                    <AsideCard setcurrentvideo={setcurrentvideo} item={item} key={index} />
                                )
                            })
                        }


                    </aside>
                </div>
            </Container>
        </main>
    )
}

export default PTV;
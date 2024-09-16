'use client'

import AsideCard from "@/app/componnent/clientcomponnent/AsideCard";
import Container from "@/app/componnent/clientcomponnent/Container";
import Vedio from "@/app/componnent/clientcomponnent/Vedio";
import ptv from "@/data/video/Ptv";
import { useState } from "react";


const PTV = () => {

    const [currentvideo, setcurrentvideo] = useState(0);

    return (
        <main className="h-fit pt-36 pb-14">
            <Container>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-8 w-full">
                        <div className="h-[500px] w-full">
                            {
                                ptv?.map((item, index) => {
                                    return (

                                        currentvideo == index && <Vedio key={index} src={item} />

                                    )
                                })
                            }





                        </div>
                    </div>
                    <aside className="col-span-12 lg:col-span-4 flex flex-col gap-4 w-full h-full overslog">

                        {
                            ptv?.map((item, index) => {
                                return (
                                    <AsideCard currentvideo={currentvideo} setcurrentvideo={setcurrentvideo} item={item} key={index} index={index} />
                                )
                            })
                        }


                    </aside>
                </div>
            </Container>
        </main >
    )
}

export default PTV;
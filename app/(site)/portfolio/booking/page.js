'use client'

import Container from "@/app/componnent/clientcomponnent/Container";
import Four from "@/app/componnent/clientcomponnent/bookingpage/Four";
import NextAndPrev from "@/app/componnent/clientcomponnent/bookingpage/NextAndPrev";
import One from "@/app/componnent/clientcomponnent/bookingpage/One";
import Prograssber from "@/app/componnent/clientcomponnent/bookingpage/PrograssBar";
import Three from "@/app/componnent/clientcomponnent/bookingpage/Three";
import Two from "@/app/componnent/clientcomponnent/bookingpage/Two";
import Image from "next/image";
import { useState } from "react";
import bgImage from "../../../../public/assets/bg-4.jpg";

const Bookign = () => {


    const [rander, setrander] = useState(1);
    const [loding, setloding] = useState(false);


    return (
        <main className="h-fit pt-24">
            <div className="flex flex-col md:flex-row items-center h-full">
                <div className="w-full py-10">
                    <Container>
                        <Prograssber rander={rander} setrander={setrander} />
                        {rander === 1 && <One />}
                        {rander === 2 && <Two />}
                        {rander === 3 && <Three />}
                        {rander === 4 && <Four />}
                        <NextAndPrev rander={rander} setrander={setrander} loding={loding} setloding={setloding} />
                    </Container>
                </div>
                <div className="w-full h-full relative">
                    <Image className='h-full object-cover' width={1000} height={1000} src={bgImage} alt="bg-image" />
                    <div className="absolute top-0 left-0 w-full h-full bannartransparentBg">

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Bookign;
'use client'

import Container from "@/app/componnent/clientcomponnent/Container";
import Five from "@/app/componnent/clientcomponnent/bookingpage/Five";
import Four from "@/app/componnent/clientcomponnent/bookingpage/Four";
import NextAndPrev from "@/app/componnent/clientcomponnent/bookingpage/NextAndPrev";
import One from "@/app/componnent/clientcomponnent/bookingpage/One";
import Prograssber from "@/app/componnent/clientcomponnent/bookingpage/PrograssBar";
import Three from "@/app/componnent/clientcomponnent/bookingpage/Three";
import Two from "@/app/componnent/clientcomponnent/bookingpage/Two";
import { useState } from "react";



const Bookign = () => {


    const [rander, setrander] = useState(1);
    const [loding, setloding] = useState(false);
    const [ispersonal, setispersonal] = useState(false);


    return (
        <main className="h-fit pt-24">
            <div className="h-full">
                <div className="w-full py-10">
                    <Container>
                        <Prograssber rander={rander} setrander={setrander} />
                        {rander === 1 && <One ispersonal={ispersonal} setispersonal={setispersonal} />}
                        {rander === 2 && <Two ispersonal={ispersonal} setrander={setrander} />}
                        {rander === 3 && <Three />}
                        {rander === 4 && <Four />}
                        {rander === 5 && <Five />}
                        <NextAndPrev rander={rander} setrander={setrander} loding={loding} setloding={setloding} />
                    </Container>
                </div>


            </div>
        </main>
    )
}

export default Bookign;
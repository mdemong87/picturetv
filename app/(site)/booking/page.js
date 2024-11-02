'use client'

import Container from "@/app/componnent/clientcomponnent/Container";
import Five from "@/app/componnent/clientcomponnent/bookingpage/Five";
import Four from "@/app/componnent/clientcomponnent/bookingpage/Four";
import NextAndPrev from "@/app/componnent/clientcomponnent/bookingpage/NextAndPrev";
import One from "@/app/componnent/clientcomponnent/bookingpage/One";
import Prograssber from "@/app/componnent/clientcomponnent/bookingpage/PrograssBar";
import Three from "@/app/componnent/clientcomponnent/bookingpage/Three";
import Two from "@/app/componnent/clientcomponnent/bookingpage/Two";
import { useStore } from "@/lib/store";



const Bookign = () => {


    const rander = useStore((state) => state.rander);


    return (
        <main className="h-fit pt-24">
            <div className="h-full">
                <div className="w-full py-10">
                    <Container>
                        <Prograssber />
                        {rander === 1 && <One />}
                        {rander === 2 && <Two />}
                        {rander === 3 && <Four />}
                        {rander === 4 && <Three />}
                        {rander === 5 && <Five />}
                        <NextAndPrev />
                    </Container>
                </div>


            </div>
        </main>
    )
}

export default Bookign;
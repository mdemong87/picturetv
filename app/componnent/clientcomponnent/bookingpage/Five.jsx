'use client'

import { useState } from "react";
import Container from "../Container";
import PaymentAmmount from "../PaymentAmountinputer";





const Five = () => {



    const [isfull, setisfull] = useState(true);


    return (
        <div>
            <Container>
                <div className="h-fit w-full p-5">
                    <div>
                        <h2 className="text-3xl font-bold text-center py-5">How would you like to Payment</h2>
                    </div>

                    <div className="flex justify-center items-center my-12">
                        <div className="text-center">
                            <div className="flex items-center gap-4">
                                <input onClick={() => { setisfull(false) }} checked={!isfull} className="w-[40px] h-[40px] rounded-xl border border-green-500" type="checkbox" />
                                <span className="text-xl font-semibold">Pause Payment</span>
                            </div>
                            <div className="flex items-center gap-4 mt-5">
                                <input onClick={() => { setisfull(true) }} checked={isfull} className="w-[40px] h-[40px] rounded-xl border border-green-500" type="checkbox" />
                                <span className="text-xl font-semibold">Full Payment</span>
                            </div>

                            <PaymentAmmount />
                        </div>
                    </div>

                </div>
            </Container >
        </div >
    )
}

export default Five;



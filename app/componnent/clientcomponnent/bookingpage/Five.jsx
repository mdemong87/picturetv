'use client'

import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from "../Container";
import PaymentAmmount from "../PaymentAmountinputer";





const Five = () => {



    const [isfull, setisfull] = useState(true);



    async function handleSubmit(e) {
        e.preventDefault();

        toast.success("Booking Information Recoarded");




    }


    return (
        <div>
            <Container>
                <div className="h-fit w-full p-5">
                    <div>
                        <h2 className="text-3xl font-bold text-center py-5"> How would you like to make the payment?</h2>
                    </div>

                    <div className="flex justify-center items-center my-12">
                        <div className="text-center">
                            <div className="flex items-center gap-4">
                                <input onClick={() => { setisfull(false) }} checked={!isfull} className="w-[40px] h-[40px] rounded-xl border border-green-500" type="checkbox" />
                                <span className="text-xl font-semibold">Deposit Half</span>
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


            <div className='w-full flex justify-center items-center'>
                <button onClick={(e) => handleSubmit(e)} className='pbg2 py-1 px-3 mt-10 mb-4 md:py-3 md:px-5 rounded-md cursor-pointer text-white text-lg font-semibold text-center'>Proceed</button>
            </div>
            <ToastContainer />
        </div >
    )
}

export default Five;



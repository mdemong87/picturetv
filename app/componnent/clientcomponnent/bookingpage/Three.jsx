'use client'

import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BookingAdditionForm from "../BookingAdditionForm";
import BookingBigForm from "../BookingBigForm";
import BookingShortForm from "../BookingShortForm";

const Three = () => {


    const router = useRouter();

    const shootType = useStore((state) => state.shootType);
    //centeral state auth user
    const authUser = useStore((state) => state.authUser);
    const rander = useStore((state) => state.rander);
    const setrander = useStore((state) => state.setrander);

    const [isloginpopup, setisloginpopup] = useState(false);



    useEffect(() => {
        //handle show function is here
        if (!authUser?.role) {
            setisloginpopup(false);
        }

    }, [authUser])



    function backhandle(e) {
        e.preventDefault()
        setrander(rander - 1);
    }


    return (
        <div className='w-full border rounded-md border-gray-300 py-10 px-7'>
            <h3 className='text-2xl text-black text-center font-semibold mb-10'>Event Booking</h3>
            {
                shootType == "Headshot" || shootType == "Fashion" || shootType == "Team & Office" || shootType == "Portrait" || shootType == "Product" || shootType == "Product" || shootType == "Food" || shootType == "Automotive" || shootType == "Aircraft" || shootType == "Commerecial" || shootType == "Industrial" || shootType == "Landscape" || shootType == "Others" || shootType == "Real Estate" ? (

                    <BookingShortForm />

                ) : shootType == "Family" || shootType == "Graduation" || shootType == "Party" || shootType == "Engagement" || shootType == "Maternity" || shootType == "Children" || shootType == "Pet" || shootType == "Anniversary" || shootType == "Others" ? (

                    <BookingAdditionForm />

                ) : (

                    <BookingBigForm />

                )
            }

            {
                isloginpopup && <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bannartransparentBg flex justify-center items-center">
                    <div className="bg-white p-6 text-center shadox-xl rounded-md">
                        <h2 className="text-2xl pb-5 font-semibold">You Should Login First</h2>
                        <div className="flex gap-5 items-center justify-center">
                            <button onClick={(e) => { backhandle(e) }} className="pbg py-1 px-2 cursor-pointer rounded-md font-semibold text-lg text-gray-50">Back</button>
                            <button onClick={() => { router.push('/auth/login') }} className="pbg py-1 px-2 cursor-pointer rounded-md font-semibold text-lg text-gray-50">Login</button>

                        </div>
                    </div>
                </div>
            }














            <div className='w-full flex justify-center items-center'>
                <button onClick={() => { setrander(5) }} className='pbg2 py-1 px-3 mt-10 mb-4 md:py-3 md:px-5 rounded-md cursor-pointer text-white text-lg font-semibold text-center'>Next</button>
            </div>

        </div >

    )
}

export default Three;
'use client'

import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import BookingAdditionForm from "../BookingAdditionForm";
import BookingBigForm from "../BookingBigForm";
import BookingShortForm from "../BookingShortForm";

const Three = () => {


    const router = useRouter();

    const shootType = useStore((state) => state.shootType);
    const ispersonal = useStore((state) => state.ispersonal);
    //centeral state auth user
    const authUser = useStore((state) => state.authUser);
    const rander = useStore((state) => state.rander);
    const setrander = useStore((state) => state.setrander);
    const fromPage = useStore((state) => state.fromPage);
    const setfromPage = useStore((state) => state.setfromPage);


    useEffect(() => {

        //handle show function is here
        if (!authUser?.role) {
            setrander(1);
            router.push("/auth/login");
        }

    }, [])



    return (
        <div className='w-full border rounded-md border-gray-300 py-10 px-7'>
            <h3 className='text-2xl text-black text-center font-semibold mb-10'>{shootType} Booking Form</h3>
            {
                shootType == "Headshot" || shootType == "Fashion" || shootType == "Team & Office" || shootType == "Portrait" || shootType == "Product" || shootType == "Product" || shootType == "Food" || shootType == "Automotive" || shootType == "Aircraft" || shootType == "Commerecial" || shootType == "Industrial" || shootType == "Landscape" || shootType == "Others" || shootType == "Real Estate" ? (

                    <BookingShortForm />

                ) : shootType == "Family" || shootType == "Graduation" || shootType == "Party" || shootType == "Engagement" || shootType == "Maternity" || shootType == "Children" || shootType == "Pet" || shootType == "Anniversary" || shootType == "Others" ? (

                    <BookingAdditionForm />

                ) : (

                    <BookingBigForm />

                )
            }


        </div >

    )
}

export default Three;
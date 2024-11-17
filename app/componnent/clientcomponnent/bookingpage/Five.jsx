'use client'

import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from "../Container";
import Loading from "../Loading";
import PaymentAmmount from "../PaymentAmountinputer";





const Five = () => {

    const router = useRouter();

    const [isloading, setisloading] = useState(false);

    const fristName = useStore((state) => state.fristName);
    const lastName = useStore((state) => state.lastName);
    const companyName = useStore((state) => state.companyName);
    const email = useStore((state) => state.email);
    const officeNumber = useStore((state) => state.officeNumber);
    const mobileNumber = useStore((state) => state.mobileNumber);
    const assignmentTitle = useStore((state) => state.assignmentTitle);
    const assignmentDate = useStore((state) => state.assignmentDate);
    const callTime = useStore((state) => state.callTime);
    const endTime = useStore((state) => state.endTime);
    const vanueName = useStore((state) => state.vanueName);
    const vanueAddress = useStore((state) => state.vanueAddress);
    const numberOfGuest = useStore((state) => state.numberOfGuest);
    const onsiteContactNumber = useStore((state) => state.onsiteContactNumber);
    const dressAttire = useStore((state) => state.dressAttire);
    const postImagetopictureTv = useStore((state) => state.postImagetopictureTv);
    const specialRequest = useStore((state) => state.specialRequest);
    const bookFor = useStore((state) => state.bookFor);
    const agreeToTerms = useStore((state) => state.agreeToTerms);
    const subscribe = useStore((state) => state.subscribe);

    const resion = useStore((state) => state.resion);
    const socialMediaProfile = useStore((state) => state.socialMediaProfile);
    const sessionInteresed = useStore((state) => state.sessionInteresed);
    const dsccribeLooking = useStore((state) => state.dsccribeLooking);
    const hearAbout = useStore((state) => state.hearAbout);


    const picDate = useStore((state) => state.picDate);
    const picTime = useStore((state) => state.picTime)
    const recieveSms = useStore((state) => state.recieveSms);

    //payment type used for is full or half payment
    const paymentType = useStore((state) => state.paymentType);
    const setpaymentType = useStore((state) => state.setpaymentType);
    const paymentAmount = useStore((state) => state.paymentAmount)
    const selectedprice = useStore((state) => state.selectedprice);




    async function handleSubmit(e) {
        e.preventDefault();


        setisloading(true);

        const bookingData = {
            fristName,
            lastName,
            companyName,
            email,
            officeNumber,
            mobileNumber,
            assignmentTitle,
            assignmentDate,
            callTime,
            endTime,
            vanueName,
            vanueAddress,
            numberOfGuest,
            onsiteContactNumber,
            dressAttire,
            postImagetopictureTv,
            specialRequest,
            bookFor,
            agreeToTerms,
            subscribe,
            resion,
            socialMediaProfile,
            sessionInteresed,
            dsccribeLooking,
            hearAbout,
            picDate,
            picTime,
            recieveSms,
            paymentType,
            paymentAmount,
            selectedprice
        };


        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/booking`, {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(bookingData)

        })

        const res = await response.json();
        setisloading(false);

        if (res.success) {

            // toast.success(res.message);
            router.push(res?.paymentInfodata?.url);

        } else {
            toast.error(res.message);
        }

    }


    return (
        <div>
            {
                isloading && <Loading />
            }
            <Container>
                <div className="h-fit w-full p-5">
                    <div>
                        <h2 className="text-3xl font-bold text-center py-5"> How would you like to make the payment?</h2>
                    </div>

                    <div className="flex justify-center items-center my-12">
                        <div className="text-center">
                            <div className="flex items-center gap-4">
                                <input onChange={() => { setpaymentType(false) }} checked={!paymentType} className="w-[40px] h-[40px] rounded-xl border border-green-500" type="checkbox" />
                                <span className="text-xl font-semibold">Half Payment</span>
                            </div>
                            <div className="flex items-center gap-4 mt-5">
                                <input onChange={() => { setpaymentType(true) }} checked={paymentType} className="w-[40px] h-[40px] rounded-xl border border-green-500" type="checkbox" />
                                <span className="text-xl font-semibold">Full Payment</span>
                            </div>

                            <PaymentAmmount isfull={paymentType} />
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



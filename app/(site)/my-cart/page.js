'use client'

import Loading from "@/app/componnent/clientcomponnent/Loading";
import { useStore } from "@/lib/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { default: Container } = require("@/app/componnent/clientcomponnent/Container");

const MyCart = () => {


    const [isloading, setisloading] = useState(false);
    const mycart = useStore((state) => state.mycart);
    const router = useRouter();



    //calculation total price 
    const totalPrice = mycart.reduce((total, item) => {
        return total + Math.round(item.price);  // Assuming `item.price` is the numeric value
    }, 0);



    //handle checkout function here
    const handleCheckout = async () => {


        try {

            setisloading(true);

            localStorage.setItem('My-Cart', JSON.stringify(mycart));


            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/payment-checkout`, {
                method: 'POST',
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({
                    price: totalPrice
                })

            })

            const res = await response.json();


            if (res.success) {
                setisloading(false);
                router.push(res?.paymentData?.url);

            } else {
                setisloading(false);
                toast.error("There was a server side Problem");
            }


        } catch (error) {
            setisloading(false);
            console.log(error);
            toast.error("There was a server side Problem");
        }

    }






    //handle remove ites from the shoping cart function here
    function removedItem(index) {
        toast.success("Item Removed Successfull");
        mycart.splice(index, 1);// Remove the item at that index
        router.refresh();
        return;

    }















    return (
        <main className="py-28 pb-6">
            {isloading && <Loading />}
            <Container>
                <div className="w-full h-fit grid grid-cols-12 gap-4">
                    <div className="rounded-md bg-white col-span-12 lg:col-span-8 p-6 mycartoverlogs">
                        <div className="flex justify-between items-center pb-2">
                            <div className="flex gap-5 items-center">
                                <div className="bg-gray-200 text-gray-500 font-bold flex justify-center items-center text-md rounded-xl p-2 cursor-pointer" onClick={() => { router.back() }}>
                                    <IoMdArrowRoundBack className="text-xl" />
                                </div>
                                <h3 className="pCl text-2xl font-semibold">SHOPING CART:</h3>
                            </div>
                            <div className="bg-gray-200 text-gray-500 font-bold flex items-center justify-center text-md rounded-lg py-1 px-2">
                                <span>Total Items: <b>{mycart?.length}</b></span>
                            </div>
                        </div>




                        {
                            mycart?.map((item, index) => {
                                return (
                                    <div key={index} className="bg-gray-100 border border-gray-300 rounded-md my-3 p-3 flex items-center gap-8 justify-between">
                                        <div className="w-fit">
                                            <Image className="w-[80px] h-[80px] object-cover rounded-md" src={item?.currentImage} alt="item-image" width={1000} height={1000} />
                                        </div>
                                        <div className="w-[350px]">
                                            <p className="text-base text-gray-500 leading-6 border-b-2 border-gray-200">{item?.allinfo?.title}</p>
                                            <p className="text-base text-gray-500 leading-6 border-b-2 border-gray-200">{item?.allinfo?.fullname}</p>
                                            <p className="text-base text-gray-500 leading-6">{item.allinfo?.eventtype}</p>
                                        </div>
                                        <div className="w-fit">
                                            <p className="text-lg font-semibold text-center">
                                                {`$${item.price}.00`}
                                            </p>
                                        </div>
                                        <div onClick={() => { removedItem(index) }} className="w-fit bg-red-400 rounded-md cursor-pointer text-white p-1">
                                            <RxCross2 className="text-2xl" />
                                        </div>
                                    </div>
                                )
                            })
                        }



                        <div className="w-full text-center md:text-right">
                            <p onClick={() => { router.back() }} className="underline font-semibold text-gray-600 cursor-pointer">KEEP SHOPING</p>
                        </div>
                    </div>





                    <div className="col-span-12 lg:col-span-4 bg-white rounded-md p-6 flex flex-col justify-between h-full">
                        <div className="">
                            <h3 className="pCl text-2xl font-semibold">ORDER SUMMARY:</h3>
                            <div className="mt-4">
                                <div className="bg-red-100 p-2 rounded-md w-full border border-red-900">
                                    <p className="text-gray-600">
                                        <b className="text-red-800">Important: </b>
                                        After Payment Your Shoping Items Will be Start to Download Automatically!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-10">
                            <div className="my-4">
                                <div>
                                    <div className="flex items-center justify-between border-b-2 border-gray-300 py-2">
                                        <span className="text-gray-500 text-lg font-semibold">Subtotal</span>
                                        <span className="text-gray-500 text-lg font-semibold">{`$${totalPrice}.00`}</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b-2 border-gray-300 py-2">
                                        <span className="text-gray-500 text-lg font-semibold">Discount</span>
                                        <span className="text-gray-500 text-lg font-semibold">$ 00.00</span>
                                    </div>

                                    <div className="flex items-center justify-between py-2">
                                        <span className="text-gray-700 text-xl font-bold">Total</span>
                                        <span className="text-gray-700 text-xl font-bold">{`$${totalPrice}.00`}</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => { handleCheckout() }} className="pbg2 text-center py-4 w-full rounded-md text-white font-bold text-xl cursor-pointer hover:bg-green-500 transition duration-500">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </Container>
            <ToastContainer position="top-center" autoClose={2000} />
        </main>
    )
}

export default MyCart;
'use client'

const { default: Container } = require("@/app/componnent/clientcomponnent/Container")
import downloadImage from "@/lib/helper/DownloadImage";
import { useStore } from "@/lib/store";
import Link from "next/link";
import { useEffect } from "react";
import { SiTicktick } from "react-icons/si";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Success = () => {


    const Url = useStore((state) => state.Image_Url);


    useEffect(() => {
        downloadImage(Url);
        toast.success('Your Image Started to Downloaded');
    }, [Url])


    return (
        <main className="pt-28">
            <Container>
                <div className="h-fit py-12 flex justify-center items-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="p-8 bg-green-400 w-fit rounded-full">
                            <SiTicktick className="text-white text-6xl" />
                        </div>
                        <h3 className="font-bold text-gray-700 text-xl">Payment Was Successfull</h3>
                        <h3 className="font-bold text-gray-700 text-center text-xl">Your Image Started to Download Automatically</h3>
                        <Link href={'/'} className="underline">Go to Media Page</Link>

                    </div>
                </div>
            </Container>
            <ToastContainer />
        </main>
    )
}

export default Success;
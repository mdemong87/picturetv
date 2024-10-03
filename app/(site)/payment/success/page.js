'use client'

const { default: Container } = require("@/app/componnent/clientcomponnent/Container")
import downloadImages from "@/lib/helper/DownloadImage";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Success = () => {


    //handle downdload items function nere
    function downloadItems() {

        const myData = localStorage.getItem('My-Cart');
        const downloadableDataList = JSON.parse(myData);


        let ImageUrlArray = [];

        downloadableDataList?.map((item, index) => {
            ImageUrlArray.push(item?.currentImage);
        })


        //show success alert
        toast.success("Your Items Started to Downloading!");

        //call the download image function
        downloadImages(ImageUrlArray);
    }




    return (
        <main className="pt-28">
            <Container>
                <div className="h-fit py-12 flex justify-center items-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="">
                            <iframe className="w-[300px]" src="https://lottie.host/embed/e8360414-6bf1-4a28-8bc7-43169dbf7d66/1htpAPMtUz.json"></iframe>
                        </div>
                        <h3 className="font-bold text-gray-700 text-xl">Payment Was Successfull</h3>
                        <button onClick={() => { downloadItems() }} className="text-center px-3 rounded-md font-semibold text-white pbg2 my-4 cursor-pointer flex items-center gap-2 justify-center hover:scale-105 transition-all duration-500 hover:shadow-xl">
                            <iframe className="w-[50px] h-[50px] mt-2" src="https://lottie.host/embed/28e7ea77-cd24-43c1-a4ea-867ce4bf42fd/MHxXGF8OX9.json"></iframe>
                            <span>Download Your Items</span>
                        </button>
                        <Link href={'/'} className="underline">Go to Media Page</Link>





                    </div>
                </div>
            </Container>
            <ToastContainer position="top-center" />
        </main>
    )
}

export default Success;
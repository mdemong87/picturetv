'use client'

const { default: Container } = require("@/app/componnent/clientcomponnent/Container")
import Link from "next/link";
import { SiTicktick } from "react-icons/si";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Success = () => {


    //handle downdload items function nere
    function downloadItems() {

        const myData = localStorage.getItem('My-Cart');
        console.log(myData);
    }




    return (
        <main className="pt-28">
            <Container>
                <div className="h-fit py-12 flex justify-center items-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="p-8 bg-green-400 w-fit rounded-full">
                            <SiTicktick className="text-white text-6xl" />
                        </div>
                        <h3 className="font-bold text-gray-700 text-xl">Payment Was Successfull</h3>
                        <button onClick={() => { downloadItems() }} className="text-center p-2 rounded-md font-semibold text-white pbg2 my-4 cursor-pointer">Download Your Items</button>
                        <Link href={'/'} className="underline">Go to Media Page</Link>

                    </div>
                </div>
            </Container>
            <ToastContainer />
        </main>
    )
}

export default Success;
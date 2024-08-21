'use client'

import Link from "next/link";
import { useState } from "react";
import HeaderUser from "./HeaderUser";


const Navber = ({ setshownav }) => {


    const [islogin, setislogin] = useState(false);


    return (
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/"}>Home</Link>
            <div className="relative inline-block text-left">
                <div className="group">
                    <div className="inline-flex justify-center items-center w-full text-base font-medium text-white"> Portfolio
                        <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                        </svg>
                    </div>
                    <div className="absolute z-50 left-0 w-48  origin-top-left bg-white divide-y divide-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible transition duration-300">
                        <div className="py-1">
                            <Link onClick={() => { setshownav(false) }} href={''} className="block px-4 py-2 text-base font-medium text-black">Actor</Link>
                            <Link onClick={() => { setshownav(false) }} href={''} className="block px-4 py-2 text-base font-medium text-black">Model</Link>
                            <Link onClick={() => { setshownav(false) }} href={''} className="block px-4 py-2 text-base font-medium text-black">Dancer</Link>
                            <Link onClick={() => { setshownav(false) }} href={''} className="block px-4 py-2 text-base font-medium text-black">Performer</Link>
                        </div>
                    </div>
                </div>
            </div>
            {
                islogin && <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/booking"}>Booking</Link>
            }
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/events"}>Events</Link>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/blogs"}>Blogs</Link>

            {
                islogin ? (
                    <HeaderUser />
                ) : (
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/auth/login"}>Login</Link>

                        <Link onClick={() => { setshownav(false) }} className='pbg2 rounded-md text-base font-medium p-3 text-white' href={"/booking"}>Book PictureTV</Link>
                    </div>
                )
            }



        </nav>
    )
}


export default Navber;
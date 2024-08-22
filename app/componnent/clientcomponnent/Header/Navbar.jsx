'use client'

import Link from "next/link";
import { useState } from "react";
import HeaderUser from "./HeaderUser";


const Navber = ({ setshownav }) => {


    const [islogin, setislogin] = useState(false);


    return (
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/"}>Media</Link>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/portfolio"}>Portfolio</Link>
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

                        <Link onClick={() => { setshownav(false) }} className='pbg2 rounded-md text-base font-medium p-3 text-white' href={"/booking"}>PTV</Link>
                    </div>
                )
            }



        </nav>
    )
}


export default Navber;
'use client'


import { useStore } from "@/lib/store";
import Link from "next/link";
import { useState } from "react";
import HeaderUser from "../../deshboardcomponnent/HeaderUser";


const Navber = ({ setshownav }) => {

    const [islogin, setislogin] = useState(false);
    const authUser = useStore((state) => state.authUser);


    return (
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/"}>Media</Link>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/portfolio"}>Portfolio</Link>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/booking"}>Booking</Link>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/events"}>Events</Link>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/blogs"}>Blog</Link>


            {
                authUser?.role ? (
                    <>
                        <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/watch"}>Watch</Link>
                        <HeaderUser />
                    </>
                ) : (
                    <>
                        <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/auth/login"}>Login</Link>
                        <Link onClick={() => { setshownav(false) }} className='pbg2 rounded-md text-base font-medium p-3 text-white' href={"/watch"}>Watch</Link>
                    </>
                )
            }

        </nav>
    )
}


export default Navber;
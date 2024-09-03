'use client'


import Link from "next/link";
import { useState } from "react";
import HeaderUser from "./HeaderUser";


const Navber = ({ setshownav }) => {

    const [islogin, setislogin] = useState(false);

    return (
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/"}>Dashboard</Link>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/portfolio"}>My Events</Link>
            <HeaderUser />
        </nav>
    )
}


export default Navber;
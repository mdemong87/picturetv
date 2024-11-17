'use client'


import Link from "next/link";
import { useState } from "react";
import HeaderUser from "../../deshboardcomponnent/HeaderUser";


const Navber = ({ setshownav }) => {

    const [islogin, setislogin] = useState(false);




    return (
        <nav className='flex flex-col md:flex-row items-center gap-5'>
            <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/admin/booking"}>Booking</Link>
            {/* <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/admin/allevent"}>All Event</Link> */}
            {/* <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/admin/addevent"}>Add Event</Link> */}
            {/* <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/admin/addportfolio"}>Add Portfolio</Link> */}
            {/* <Link onClick={() => { setshownav(false) }} className='text-base font-medium text-white' href={"/admin/payment"}>Payment History</Link> */}
            <HeaderUser />
        </nav>
    )
}


export default Navber;
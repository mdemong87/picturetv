'use client'

import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";
import { toast } from 'react-toastify';



const Logout = ({ toggleController }) => {


    const router = useRouter();


    //handle Sign Out function here
    async function handleSignOut() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/logout`, {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            }

        })

        const res = await response.json();

        if (res.success) {
            toast.success('Log out Successfull');
            setTimeout(() => {
                toggleController(false);
                router.push("/auth/login");
            }, 500);
        } else {
            toast.error("Log out Failed");
        }
    }




    return (
        <button onClick={() => { handleSignOut() }} className="w-full pbg rounded-md text-center flex justify-center gap-3 items-center py-2 ">
            <FaSignOutAlt className="font-bold text-2xl rotate-180 text-white" />
            <span className="font-bold text-xl text-white">Log out</span>
        </button>
    )
}

export default Logout;
'use client'

import { useState } from "react";
import { FaUser } from "react-icons/fa";
import UserToggle from "./UserToggle";

function HeaderUser({ session }) {


    //local state here
    const [showToggle, setshowToggle] = useState(false);



    return (
        <div>
            <div onClick={() => setshowToggle(true)} className="w-[3rem] h-[3rem] md:w-[3.08rem] md:h-[3.08rem] rounded-full bg-white flex items-center justify-center cursor-pointer">
                <FaUser className="pcl text-3xl" />
            </div>
            {
                showToggle && <UserToggle session={session} toggleController={setshowToggle} />
            }
        </div>
    )
}

export default HeaderUser;
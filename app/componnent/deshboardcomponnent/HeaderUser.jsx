'use client'

import { useState } from "react";
import { FaUser } from "react-icons/fa";
import UserToggle from "./UserToggle";

function HeaderUser() {


    //local state here
    const [showToggle, setshowToggle] = useState(false);




    return (
        <div>
            <div onClick={() => setshowToggle(true)} className="w-[2.8rem] h-[2.8rem] rounded-full bg-white flex items-center justify-center cursor-pointer">
                <FaUser className="pcl text-3xl" />
            </div>
            {
                showToggle && <UserToggle toggleController={setshowToggle} />
            }
        </div>
    )
}

export default HeaderUser;
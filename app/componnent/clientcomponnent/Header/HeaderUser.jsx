'use client'

import { useState } from "react";
import UserToggle from "./UserToggle";

function HeaderUser() {


    //local state here
    const [showToggle, setshowToggle] = useState(false);


    return (
        <div>
            <div onClick={() => setshowToggle(true)} className="w-[3rem] h-[3rem] md:w-[3.08rem] md:h-[3.08rem] rounded-full">
                <img className="rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" alt="User-Photo" />
            </div>
            {
                showToggle && <UserToggle toggleController={setshowToggle} />
            }
        </div>
    )
}

export default HeaderUser;
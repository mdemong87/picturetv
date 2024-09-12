'use client'

import { RxCross2 } from "react-icons/rx";

const PerchasLogin = ({ setisloginshow }) => {
    return (
        <div className="fixed top-0 left-0 w-full bannartransparentBgforActor h-screen z-50 py-6 overflow-y-scroll">
            <div className="w-full flex justify-end mb-4 lg:mb-0">
                <div onClick={() => { setisloginshow(false) }} className="pbg2 rounded-md w-[43px] flex items-center justify-center h-[43px] cursor-pointer hover:rotate-180 transition duration-500">
                    <RxCross2 className="text-white text-3xl" />
                </div>
            </div>
        </div>
    )
}

export default PerchasLogin;
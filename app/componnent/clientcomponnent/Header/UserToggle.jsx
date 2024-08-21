'use client'

import { RxCross2 } from "react-icons/rx";
import styles from "../../../../styles/clientconponnent/Header/UserToggle.module.css";

function UserToggle({ toggleController }) {


    return (
        <div className={`fixed overflow-hidden top-0 left-0 w-screen h-screen z-10 ${styles.userToogleWrper}`}>
            <div className="h-screen pbg3">
                <div className="flex justify-between ">
                    <div className="flex gap-3 items-center">
                        <div className="w-[3rem] h-[3rem] md:w-[3.30rem] md:h-[3.30rem] rounded-full">
                            <img className="rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" alt="User-Photo" />
                        </div>
                        <div>
                            <h3 className="text-lg md:text-xl font-medium text-gray-600">Md Emon Hossen</h3>
                            <p className="text-gray-400 font-normal text-sm md:text-md">@mdemong87</p>
                        </div>
                    </div>
                    <div onClick={() => toggleController(false)} className={'w-[39px] h-[39px] md:w-[43px] md:h-[43px] pbg rounded-lg flex justify-center items-center hover:rotate-180 transition duration-500'}>
                        <RxCross2 className="text-gray-50 text-2xl" />
                    </div>
                </div>

                <div className="mt-8 md:mt-14">
                    fsadfasdfasdf
                    asdfasdf
                </div>
            </div>
        </div>
    )
}

export default UserToggle;
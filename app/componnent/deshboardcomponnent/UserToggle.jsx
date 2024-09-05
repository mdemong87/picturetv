'use client'

import { FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import styles from "../../../styles/clientconponnent/Header/UserToggle.module.css";
import Logout from "./Logout";

function UserToggle({ session, toggleController }) {

    console.log('this is user togle');
    console.log(session);

    return (
        <div className={`fixed overflow-hidden top-0 left-0 w-screen h-screen z-10 ${styles.userToogleWrper}`}>
            <div className="h-screen pbg3 flex flex-col justify-between">
                <div className="flex justify-between ">
                    <div className="flex gap-3 items-center">
                        <div className="w-[3rem] h-[3rem] md:w-[3.30rem] pbg rounded-full flex items-center justify-center md:h-[3.30rem] rounded-full">
                            <FaUser className="text-white text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-lg md:text-xl font-medium text-gray-600">{session?.email}</h3>
                            {/* <p className="text-gray-400 font-normal text-sm md:text-md">@mdemong87</p> */}
                        </div>
                    </div>
                    <div onClick={() => toggleController(false)} className={'w-[39px] h-[39px] md:w-[43px] md:h-[43px] pbg rounded-lg flex justify-center cursor-pointer items-center hover:rotate-180 transition duration-500'}>
                        <RxCross2 className="text-gray-50 text-2xl" />
                    </div>
                </div>

                <div className="mt-8 md:mt-14">


                    <div className="w-full h-full">
                        <Logout />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserToggle;
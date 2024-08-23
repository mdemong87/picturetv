'use client'

import Link from "next/link";


const Login = () => {
    return (
        <main className="h-fit pt-36 pb-14 w-screen">
            <div className="flex justify-center items-cetner w-full h-full">
                <div className="border border-gray-300 p-8 rounded-md h-fit w-fit">
                    <h2 className="text-2xl text-center font-bold text-shadow-lg text-gray-800">Login</h2>

                    <div className="mt-6 flex flex-col gap-5">

                        <input
                            type="email"
                            name="bookingFirstName"
                            id="bookingFirstName"
                            className='booking-input-field p-3 rounded-md'
                            placeholder='Email'
                        />





                        <input
                            type="password"
                            name="bookingFirstName"
                            id="bookingFirstName"
                            className='booking-input-field p-3 rounded-md'
                            placeholder='Password'
                        />



                        <select className='booking-input-field p-3 rounded-md'>
                            <option value="Role">Role </option>
                            <option value="Client">Client</option>
                            <option value="Photographer">Photographer</option>
                            <option value="Admin">Admin</option>
                        </select>



                        <button onClick={(e) => { handleSearch(e) }} className="pbg w-full col-span-12 lg:col-span-2 rounded-md text-white p-3">
                            Login
                        </button>

                        <div className="text-center">
                            <p>
                                Don&#39;t Have an Account?
                                <Link className="pcl2 pl-2" href={'/auth/ragester'}>Ragester</Link>
                            </p>
                            <p>OR</p>
                            <Link href={'/'} className="pcl2">Forget Password</Link>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login;
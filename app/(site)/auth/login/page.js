'use client'
import Loading from "@/app/componnent/clientcomponnent/Loading";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {


    const router = useRouter();

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [role, setrole] = useState('');
    const [isloading, setisloading] = useState(false);


    //handle handlelogin function here
    async function handlelogin() {





        if (email !== '' || password !== '' || role !== '' || role !== "Role") {

            setisloading(true);

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    role
                })

            })

            const res = await response.json();

            setisloading(false);
            setemail('');
            setpassword('');
            setrole('');

            if (res.success) {
                toast.success(res.message);
                setTimeout(() => {
                    location.href = `${process.env.NEXT_PUBLIC_BASE_URL}`;
                }, 500);
            } else {
                toast.error(res.message);
            }

        } else {
            toast.error("Enter All Flied");
        }






    }



    return (
        <main className="h-fit pt-36 pb-14 w-screen">
            {isloading && <Loading />}
            <div className="flex justify-center items-cetner w-full h-full">
                <div className="border border-gray-300 p-8 rounded-md h-fit w-fit">
                    <h2 className="text-2xl text-center font-bold text-shadow-lg text-gray-800">Login</h2>

                    <div
                        className="mt-6 flex flex-col gap-5">

                        <input
                            onChange={(e) => { setemail(e.target.value) }}
                            type="email"
                            name="email"
                            id="email"
                            className='booking-input-field p-3 rounded-md'
                            placeholder='Email'
                        />





                        <input onChange={(e) => { setpassword(e.target.value) }}
                            type="password"
                            name="password"
                            id="password"
                            className='booking-input-field p-3 rounded-md'
                            placeholder='Password'
                        />



                        <select onChange={(e) => setrole(e.target.value)} className='booking-input-field p-3 rounded-md'>
                            <option value="Role">Select Category</option>
                            <option value="Register">Register</option>
                            <option value="Client">Client</option>
                            <option value="Photographer">Photographer</option>
                            <option value="Vediographer">Videographer</option>
                        </select>



                        <button onClick={() => { handlelogin() }} className="pbg w-full col-span-12 lg:col-span-2 rounded-md text-white p-3">
                            Login
                        </button>

                        <div className="text-center">
                            <p>
                                Don&#39;t have an Account?
                                <Link className="pcl2 pl-2 underline" href={'/auth/ragester'}>Sign Up</Link>
                            </p>
                            <p>OR</p>
                            <Link href={'/auth/forgetpass'} className="pcl2 underline">Forget Password</Link>
                            {/* <Link href={'/auth/verifieduser'} className="pcl2 underline">Verify User</Link> */}
                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </main>
    )
}

export default Login;
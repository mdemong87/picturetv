import gertusersession from "@/lib/helper/getusersesssion";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Dashboard = async () => {



    const session = gertusersession();


    return (
        <main className="h-screen">
            <div className="flex flex-col justify-center items-center w-screen h-screen">
                <h1 className="text-3xl font-bold text-red-700">This is the Dashboard page for Client,Photographer,Vidiographer</h1>
                <h1 className="text-3xl font-bold text-red-500 pt-3">Data Will be added very soon</h1>

                <h1 className="text-2xl pt-6 font-bold text-gray-700">Click User Icon in the Header for Logout</h1>

            </div>
            <ToastContainer />
        </main>
    )
}

export default Dashboard;
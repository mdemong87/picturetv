import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Dashboard = async () => {




    const session = await auth();

    console.log(session?.user);

    if (!session?.user) {
        redirect('/auth/login');
    }


    return (
        <main className="h-screen">
            <div>
                <h1>This is check componnent</h1>

                fsdfasd

            </div>
            <button className="bg-red-800 text-white p-2">hello</button>

            <ToastContainer />
        </main>
    )
}

export default Dashboard;
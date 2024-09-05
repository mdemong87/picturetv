import Container from "@/app/componnent/clientcomponnent/Container";
import EventCard from "@/app/componnent/deshboardcomponnent/EventCard";
import gertusersession from "@/lib/helper/getusersesssion";
import Link from "next/link";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const getEvent = async (session) => {
    //fetch data event data from the api/dashboard
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session?.user?.email}`
        }
    });
    const data = await res.json();
    return data;
}




const Dashboard = async () => {

    //get sission data
    const session = await gertusersession();

    const data = await getEvent(session);

    return (
        <main className="h-fit">
            <div className="flex flex-col justify-center items-center w-screen h-fit py-32">

                <Container>


                    {
                        data.data.length > 0 ? (

                            <div className="grid grid-cols-12 items-center gap-5">
                                {
                                    data?.data?.map((singleCard, index) => {
                                        return (
                                            <EventCard key={index} data={singleCard} />
                                        )
                                    })
                                }
                            </div>

                        ) : (


                            <div className="w-full flex  justify-center items-center">
                                <div className="mt-20 text-center">
                                    <h1 className="text-4xl font-semibold">Welcome to the Dashboard</h1>
                                    <h2 className="py-4 text-2xl font-semibold">Make your Frist Event</h2>
                                    <Link className="pbg2 text-white p-2 rounded-md font-semibold" href={'/dashboard/addevent'}>Go To Add Event</Link>
                                </div>
                            </div>
                        )
                    }






                </Container>

            </div>
            <ToastContainer />
        </main>
    )
}

export default Dashboard;
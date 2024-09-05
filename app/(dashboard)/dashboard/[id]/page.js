import BackBtn from "@/app/componnent/BackBtn";
import Container from "@/app/componnent/clientcomponnent/Container";
import DeleteBtn from "@/app/componnent/deshboardcomponnent/DeleteBtn";
import JustImage from "@/app/componnent/deshboardcomponnent/JustImage";
import gertusersession from "@/lib/helper/getusersesssion";
import { ToastContainer } from "react-toastify";

const SingleDashBoardEvent = async ({ params }) => {


    //get sission data
    const session = await gertusersession();

    //fetch data event data from the api/dashboard
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard/${params.id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session?.user?.email}`
        }
    });
    const data = await res.json();


    return (
        <main className="h-fit">
            <div className="flex flex-col justify-center items-center w-screen h-fit py-32">

                <Container>


                    <div>
                        <div className="">
                            <div className="flex justify-between items-center my-5">
                                <BackBtn link="/dashboard" />
                                <DeleteBtn data={data} />
                            </div>
                            <div className="w-full">
                                <h2 className="flex gap-2 items-center">
                                    <b className="text-2xl text-gray-700">Event Id:</b>
                                    <span className="text-2xl text-gray-600">{data?.data?.eventid}</span>
                                </h2>
                                <h2 className="flex gap-2 items-center">
                                    <b className="text-2xl text-gray-700">Event Creator:</b>
                                    <span className="text-2xl text-gray-600">{data?.data?.fullname}</span>
                                </h2>
                                <h2 className="flex gap-2 items-center">
                                    <b className="text-2xl text-gray-700">Event Title:</b>
                                    <span className="text-2xl text-gray-600">{data?.data?.title}</span>
                                </h2>
                                <h2 className="flex gap-2 items-center">
                                    <b className="text-2xl text-gray-700">Event Discription:</b>
                                    <span className="text-2xl text-gray-600">{data?.data?.dis}</span>
                                </h2>

                            </div>

                        </div>
                        <h1 className="text-2xl pt-4 font-bold">Items Type:<span className="text-gray-600"> {data?.data?.type}</span> </h1>
                        <div className="mt-10 grid grid-cols-6 items-center gap-4">


                            {
                                data?.data?.file?.map((singleimage, index) => {
                                    return (
                                        <JustImage key={index} singleimage={singleimage} />
                                    )
                                })
                            }

                        </div>
                    </div>

                </Container>

            </div>
            <ToastContainer />
        </main>
    )
}

export default SingleDashBoardEvent;
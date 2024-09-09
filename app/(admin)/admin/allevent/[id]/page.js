import BackBtn from "@/app/componnent/BackBtn";
import Container from "@/app/componnent/clientcomponnent/Container";
import DeleteBtn from "@/app/componnent/deshboardcomponnent/DeleteBtn";
import JustImage from "@/app/componnent/deshboardcomponnent/JustImage";
import { FiEdit } from "react-icons/fi";

const GetSingleEvent = async (id) => {
    //fetch data event data from the api/dashboard
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/allevent/${id}`);
    const response = await res.json();
    return response;
}


const SingleAllEventPage = async ({ params }) => {


    const id = params?.id;
    const data = await GetSingleEvent(id);








    return (
        <main className="pt-28 pb-6">
            <Container>
                <div>
                    <div className="flex items-center justify-between">
                        <BackBtn link="/admin/allevent" />
                        <div className="flex items-center gap-5">
                            <button className="bg-green-400 text-white text-lg flex gap-2 items-center p-3 font-bold rounded-md">
                                <FiEdit className="text-2xl cursor-pointer text-white" />
                                Edit
                            </button>
                            <DeleteBtn />
                        </div>
                    </div>

                    <div className="w-full mt-9">
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

                        <h2 className="flex gap-2 items-center">
                            <b className="text-2xl text-gray-700">Event Status:</b>
                            <span className="text-2xl text-gray-600">{data?.data?.isApproved ? "Approved" : "Disapproved"}</span>
                        </h2>

                        <h2 className="flex gap-2 items-center">
                            <b className="text-2xl text-gray-700">Total <span>{data?.data?.type}</span>:</b>
                            <span className="text-2xl text-gray-600">{data?.data?.file?.length}</span>
                        </h2>

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
        </main>
    )
}

export default SingleAllEventPage;
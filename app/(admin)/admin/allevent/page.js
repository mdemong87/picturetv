import Container from "@/app/componnent/clientcomponnent/Container";
import Image from "next/image";
import Link from "next/link";



const GetallEvent = async (session) => {
    //fetch data event data from the api/dashboard
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/allevent`);
    const response = await res.json();
    return response;
}



const AllEvent = async () => {



    const allevent = await GetallEvent();



    return (
        <main className="pt-28 pb-6">
            <Container>
                <div className="w-full">

                    <table className="w-full divide-y divide-gray-200 rounded-md">
                        <thead className="pbg2 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Event Photo
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Sl
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Event ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs  font-semibold uppercase tracking-wider">
                                    Event Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Creator Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Event Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Creator Role
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Event Type
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Event Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    View Full Event
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">

                            {
                                allevent?.data?.map((singleData, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                <Image className="w-auto h-auto object-cover" width={1000} height={1000} src={singleData?.file[0]?.secure_url} alt="Image-thamnal" />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.eventid}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{singleData?.title}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.fullname}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{singleData?.role}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.type}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">

                                                <span className={`flex gap-1 px-1 py-0 rounded-md items-center ${singleData?.isApproved ? "bg-green-200" : "bg-red-200"}`}>
                                                    <span className="text-gray-600 font-semibold p-1">
                                                        {
                                                            singleData?.isApproved ? "Approved" : "Disapproved"
                                                        }
                                                    </span>
                                                </span>

                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <Link className="underline" href={`/admin/allevent/${singleData?.eventid}`}>View</Link>
                                            </td>
                                        </tr>


                                    )
                                })
                            }





                        </tbody>
                    </table>







                </div>
            </Container>
        </main>
    )
}

export default AllEvent;


import Container from "@/app/componnent/clientcomponnent/Container";



const GetallBooking = async () => {
    //fetch data event data from the api/dashboard
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/booking`, {
        method: "GET",
    });
    const response = await res.json();
    return response;
}



const AllBooking = async () => {



    const allBookingData = await GetallBooking();





    return (
        <main className="pt-28 pb-6">
            <Container>

                <div className="w-full px-0 overflow-x-scroll bookinglongShoing">

                    <table className="w-full overflow-scroll divide-y divide-gray-200 rounded-md">
                        <thead className="pbg2 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Sl
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Full Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs  font-semibold uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Company Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Office Number
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Mobile Number
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Assignment Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Assignment Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Call Time
                                </th>

                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    End Time
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Vanue Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Vanue Address
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Guest Number
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Onsite Contact Number
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Dress Attire
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Agree Share pictureTV
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Special Request
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Book For
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Agree To Terms
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Agree To Subscrise
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Region/State
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Social Media Profile
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Session Interesed
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Looking For
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Hear About Us
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Select Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Select Time
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Agree to Recieve Sms
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Payment Type
                                </th>

                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Payment Amount
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Selected Package
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Created Time
                                </th>

                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">

                            {
                                allBookingData?.data?.map((singleData, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{singleData?.fristName + " " + singleData?.lastName}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.companyName}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{singleData?.officeNumber}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.mobileNumber}</td>



                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.assignmentTitle}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{singleData?.assignmentDate}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.callTime}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.endTime}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{singleData?.vanueName}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.vanueAddress}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.numberOfGuest}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{singleData?.onsiteContactNumber}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.dressAttire}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.postImagetopictureTv ? "YES" : "NO"}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{singleData?.specialRequest}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.bookFor}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.agreeToTerms ? "YES" : "NO"}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{singleData?.subscribe ? "YES" : "NO"}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.resion}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.socialMediaProfile}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{singleData?.sessionInteresed}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.dsccribeLooking}</td>


                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{singleData?.hearAbout}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.picDate}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.picTime}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{singleData?.recieveSms ? "YES" : "NO"}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.paymentType ? "Full" : "Half"}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.paymentAmount}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{singleData?.selectedprice}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{singleData?.createdAt}</td>


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

export default AllBooking;


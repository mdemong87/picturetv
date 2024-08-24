import Container from "@/app/componnent/clientcomponnent/Container";
import Link from "next/link";

const Event = () => {
    return (
        <main className="h-fit pt-36 pb-14">
            <Container>
                <div className='w-full border rounded-md border-gray-300 py-10 px-7'>
                    <h3 className='text-2xl text-black text-center font-semibold mb-10'>Event Booking</h3>
                    <div>
                        <form className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingFirstName">First Name:</label>
                                <input
                                    type="text"
                                    name="bookingFirstName"
                                    id="bookingFirstName"
                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='First Name'
                                />

                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingLastName">Last Name:</label>
                                <input
                                    type="text"
                                    name="bookingLastName"
                                    id="bookingLastName"
                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Last Name'
                                />

                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingcompanyName">Company Name:</label>
                                <input
                                    type="text"
                                    name="bookingcompanyName"
                                    id="bookingCompanyName"
                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Company Name'
                                />

                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingEmail">Email:</label>
                                <input
                                    type="email"
                                    name="bookingEmail"
                                    id="bookingEmail"

                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='info@gmail.com'
                                />

                            </div>
                            <div className="flex flex-col gap-2">
                                <hr />
                                {/* booking info */}
                                <label htmlFor="bokkignOfficeNumber">Office Number:</label>
                                <input
                                    type="number"
                                    name="bokkignOfficeNumber"
                                    id="bookingOfficeNumber"

                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Office Number'
                                />

                            </div>
                            <div className="flex flex-col gap-2">
                                <hr />
                                {/* booking info */}
                                <label htmlFor="bokkingMobileNumber">Mobile Number:</label>
                                <input
                                    type="number"
                                    name="bokkingMobileNumber"
                                    id="bokkingMobileNumber"

                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Mobile Number'
                                />

                            </div>
                            <div className="flex flex-col gap-2">
                                <hr />
                                {/* booking info */}
                                <label htmlFor="bokkingAssignmentTitle">Assignment Title:</label>
                                <input
                                    type="text"
                                    name="bokkingAssignmentTitle"
                                    id="bokkingAssignmentTitle"

                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Assignment Title'
                                />

                            </div>

                            <div className="flex flex-col gap-2">
                                <hr />
                                {/* booking info */}
                                <label htmlFor="bokkingAssignmentDate">Assignment Date:</label>
                                <input
                                    type="date"
                                    name="bokkingAssignmentDate"
                                    id="bokkingAssignmentDate"

                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Assignment Date'
                                />

                            </div>

                            <div className="flex flex-col gap-2">
                                <hr />
                                {/* booking info */}
                                <label htmlFor="bookingCallTime">Call Time:</label>
                                <input
                                    type="time"
                                    name="bookingCallTime"
                                    id="bookingCallTime"

                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Call Time'
                                />

                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingEndTime">End Time:</label>
                                <input
                                    type="time"
                                    name="bookingEndTime"
                                    id="bookingEndTime"

                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='End Time'
                                />

                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingVanueName">Vanue Name:</label>
                                <input
                                    type="text"
                                    name="bookingVanueName"
                                    id="bookingVanueName"

                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Vanue Name'
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingVanueAddress">Vanue Address:</label>
                                <input
                                    type="text"
                                    name="bookingVanueAddress"
                                    id="bookingVanueAddress"

                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Vanue Address'
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingNumberofguest">Expected Number of Guests:</label>
                                <input
                                    type="number"
                                    name="bookingNumberofguest"
                                    id="bookingNumberofguest"

                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Expected Number of Guests'
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingDressAttire">Dress Attire:</label>
                                <input
                                    type="text"
                                    name="bookingDressAttire"
                                    id="bookingDressAttire"

                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Dress Attire'
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingOnSiteContactName">On Site Contact Name:</label>
                                <input
                                    type="text"
                                    name="bookingOnSiteContactName"
                                    id="bookingOnSiteContactName"
                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='On Site Contact Name'
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingPostImage">Post images to <Link className="pcl font-bold" href="https://www.youtube.com/channel/UCcSN0lEmUsz_daQTkMUiMPg">Picturetv.com</Link> & service to media (*):</label>
                                <select name="bookingPostImage" className='booking-input-field p-3 rounded-md'>
                                    <option value="YES">YES</option>
                                    <option value="NO">NO</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingRequest">Special Requests/Notes:</label>
                                <textarea
                                    name="bookingRequest"
                                    id="bookingRequest"
                                    cols="30"
                                    rows="5"
                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Special Requests/Notes:'
                                >
                                </textarea>
                            </div>

                        </form>
                    </div>


                    <button className="text-xl text-center mt-8 font-bold pbg px-4 py-2 text-white rounded-md">Submit</button>
                </div>

            </Container>
        </main>
    )
}

export default Event;
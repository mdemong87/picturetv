import Container from "@/app/componnent/clientcomponnent/Container";

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
                                <label htmlFor="bookingLastName">Company Name:</label>
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
                                <label htmlFor="bookingEventTitle">Office Number:</label>
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
                                <label htmlFor="bookingEventTitle">Mobile Number:</label>
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
                                <label htmlFor="bookingEventTitle">Assignment Title:</label>
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
                                <label htmlFor="bookingEventTitle">Assignment Date:</label>
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
                                <label htmlFor="bookingEventTitle">Event Title:</label>
                                <input
                                    type="text"
                                    name="bookingEventTitle"
                                    id="bookingEventTitle"

                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Event Title'
                                />

                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingStreetAddress">Street Address:</label>
                                <input
                                    type="text"
                                    name="bookingStreetAddress"
                                    id="bookingStreetAddress"

                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Address'
                                />

                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingCity">City:</label>
                                <select className='booking-input-field p-3 rounded-md'>
                                    <option value="New York">New York</option>
                                    <option value="Los Angeles">Los Angeles</option>
                                    <option value="Hamptons">Hamptons</option>
                                    <option value="Washington DC">Washington DC</option>
                                    <option value="Miami">Miami</option>
                                    <option value="San Francisco">San Francisco</option>
                                    <option value="Chicago">Chicago</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingAdmission">Admission:</label>
                                <select className='booking-input-field p-3 rounded-md'>
                                    <option value="Ticketed Event">Ticketed Event</option>
                                    <option value="Invite Only">Invite Only</option>
                                    <option value="Open">Open</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingIndustry">Industry:</label>
                                <select className='booking-input-field p-3 rounded-md'>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Charity">Charity</option>
                                    <option value="Nightlife">Nightlife</option>
                                    <option value="Fine Arts">Fine Arts</option>
                                    <option value="Dining">Dining</option>
                                    <option value="Music">Music</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingWebsite">Website:</label>
                                <input
                                    type="text"
                                    name="bookingWebsite"
                                    id="bookingWebsite"

                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Website'
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingDescription">Description:</label>
                                <textarea
                                    name="bookingDescription"
                                    id="bookingDescription"
                                    cols="30"
                                    rows="5"
                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Message...'
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
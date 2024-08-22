
const Three = () => {
    return (
        <div className='w-full border rounded-md border-gray-300 p-4'>
            <h3 className='text-2xl text-black text-center font-semibold mb-10'>Booking Info</h3>
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

        </div>

    )
}

export default Three;
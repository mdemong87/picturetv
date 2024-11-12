const BookingAdditionForm = () => {
    return (
        <div>
            <form className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className="flex flex-col gap-2">
                    <label htmlFor="bookingFirstName">Name:</label>
                    <input
                        type="text"
                        name="bookingFirstName"
                        id="bookingFirstName"
                        className='booking-input-field p-3 rounded-md'
                        placeholder='First Name'
                    />

                </div >

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
                    <label htmlFor="bokkignOfficeNumber">Phone Number:</label>
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
                    <label htmlFor="bokkingAssignmentDate">Select Date:</label>
                    <input
                        type="date"
                        name="bokkingAssignmentDate"
                        id="bokkingAssignmentDate"

                        className='booking-input-field p-3 rounded-md'
                        placeholder='Assignment Date'
                    />

                </div>




                <div className="flex flex-col gap-2">
                    <label htmlFor="bookingRequest">Add your Message:</label>
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






                <div className="flex flex-col gap-2">
                    <hr />
                    {/* booking info */}
                    <label htmlFor="bookingCallTime">Select Time:</label>
                    <input
                        type="time"
                        name="bookingCallTime"
                        id="bookingCallTime"

                        className='booking-input-field p-3 rounded-md'
                        placeholder='Call Time'
                    />

                </div>







                <div className="mt-6">
                    <div className="flex gap-3 items-center">
                        <input className="w-[20px] h-[20px]" type="checkbox" />
                        <span className="text-xl pcl2">
                            I Want ti receive an sms reminder 24 hours before this session starts
                        </span>
                    </div>
                </div>



            </form >
        </div>
    )
}
export default BookingAdditionForm;
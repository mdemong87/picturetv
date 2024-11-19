import { useStore } from "@/lib/store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BookingAdditionForm = () => {


    const setrander = useStore((state) => state.setrander);


    const fristName = useStore((state) => state.fristName);
    const mobileNumber = useStore((state) => state.mobileNumber);
    const email = useStore((state) => state.email);
    const picDate = useStore((state) => state.picDate);
    const picTime = useStore((state) => state.picTime);
    const dsccribeLooking = useStore((state) => state.dsccribeLooking);
    const recieveSms = useStore((state) => state.recieveSms);
    const agreeToTerms = useStore((state) => state.agreeToTerms);
    const subscribe = useStore((state) => state.subscribe);



    const setfristName = useStore((state) => state.setfristName);
    const setmobileNumber = useStore((state) => state.setmobileNumber);
    const setemail = useStore((state) => state.setemail);
    const setpicDate = useStore((state) => state.setpicDate);
    const setpicTime = useStore((state) => state.setpicTime);
    const setdsccribeLooking = useStore((state) => state.setdsccribeLooking);
    const setrecieveSms = useStore((state) => state.setrecieveSms);
    const setagreeToTerms = useStore((state) => state.setagreeToTerms);
    const setsubscribe = useStore((state) => state.setsubscribe);



    //go next step function is here
    function goNext(e) {

        e.preventDefault();

        if (
            fristName != "" &&
            email != "" &&
            mobileNumber != "" &&
            picDate != "" &&
            picTime != "" &&
            dsccribeLooking != ""
        ) {


            setrander(5);
        } else {
            toast.warn("Please Fill Up All Fields");
        }


    }








    return (

        <>


            <div>
                <form className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="bookingFirstName">Full Name:</label>
                        <input
                            onChange={(e) => { setfristName(e.target.value) }}
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
                            onChange={(e) => { setemail(e.target.value) }}
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
                            onChange={(e) => { setmobileNumber(e.target.value) }}
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
                            onChange={(e) => { setpicDate(e.target.value) }}
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
                            onChange={(e) => { setdsccribeLooking(e.target.value) }}
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
                            onChange={(e) => { setpicTime(e.target.value) }}
                            type="time"
                            name="bookingCallTime"
                            id="bookingCallTime"

                            className='booking-input-field p-3 rounded-md'
                            placeholder='Call Time'
                        />

                    </div>







                    <div className="mt-6">
                        <div className="flex gap-3 items-center">
                            <input onChange={(e) => { setrecieveSms(!recieveSms) }} className="w-[20px] h-[20px]" type="checkbox" />
                            <span className="text-xl pcl2">
                                I Want to Receive an SMS Reminder
                            </span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="flex gap-3 items-center">
                            <input onChange={(e) => { setagreeToTerms(!agreeToTerms) }} checked={agreeToTerms} className="w-[20px] h-[20px]" type="checkbox" />
                            <span className="text-xl pcl2">
                                I Agree to the Terms and Conditions
                            </span>
                        </div>
                        <div className="flex gap-3 items-center mt-2">
                            <input onChange={(e) => { setsubscribe(!subscribe) }} checked={subscribe} className="w-[20px] h-[20px]" type="checkbox" />
                            <span className="text-xl pcl2">Subscribe to our newsletter</span>
                        </div>
                    </div>



                </form >
            </div>



            <div className='w-full flex justify-center items-center'>
                <button onClick={(e) => { goNext(e) }} className='pbg2 py-1 px-3 mt-10 mb-4 md:py-3 md:px-5 rounded-md cursor-pointer text-white text-lg font-semibold text-center'>Next</button>
            </div>


            <ToastContainer />
        </>
    )
}
export default BookingAdditionForm;
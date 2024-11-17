import { useStore } from "@/lib/store";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingBigForm = () => {


    const setrander = useStore((state) => state.setrander);

    const fristName = useStore((state) => state.fristName);
    const lastName = useStore((state) => state.lastName);
    const companyName = useStore((state) => state.companyName);
    const email = useStore((state) => state.email);
    const officeNumber = useStore((state) => state.officeNumber);
    const mobileNumber = useStore((state) => state.mobileNumber);
    const assignmentTitle = useStore((state) => state.assignmentTitle);
    const assignmentDate = useStore((state) => state.assignmentDate);
    const callTime = useStore((state) => state.callTime);
    const endTime = useStore((state) => state.endTime);
    const vanueName = useStore((state) => state.vanueName);
    const vanueAddress = useStore((state) => state.vanueAddress);
    const numberOfGuest = useStore((state) => state.numberOfGuest);
    const onsiteContactNumber = useStore((state) => state.onsiteContactNumber);
    const dressAttire = useStore((state) => state.dressAttire);
    const postImagetopictureTv = useStore((state) => state.postImagetopictureTv);
    const specialRequest = useStore((state) => state.specialRequest);
    const bookFor = useStore((state) => state.bookFor);
    const agreeToTerms = useStore((state) => state.agreeToTerms);
    const subscribe = useStore((state) => state.subscribe);






    const setfristName = useStore((state) => state.setfristName);
    const setlastName = useStore((state) => state.setlastName);
    const setcompanyName = useStore((state) => state.setcompanyName);
    const setemail = useStore((state) => state.setemail);
    const setofficeNumber = useStore((state) => state.setofficeNumber);
    const setmobileNumber = useStore((state) => state.setmobileNumber);
    const setassignmentTitle = useStore((state) => state.setassignmentTitle);
    const setassignmentDate = useStore((state) => state.setassignmentDate);
    const setcallTime = useStore((state) => state.setcallTime);
    const setendTime = useStore((state) => state.setendTime);
    const setvanueName = useStore((state) => state.setvanueName);
    const setvanueAddress = useStore((state) => state.setvanueAddress);
    const setnumberOfGuest = useStore((state) => state.setnumberOfGuest);
    const setdressAttire = useStore((state) => state.setdressAttire);
    const setonsiteContactNumber = useStore((state) => state.setonsiteContactNumber);
    const setpostImagetopictureTv = useStore((state) => state.setpostImagetopictureTv);
    const setspecialRequest = useStore((state) => state.setspecialRequest);
    const setbookFor = useStore((state) => state.setbookFor);
    const setagreeToTerms = useStore((state) => state.setagreeToTerms);
    const setsubscribe = useStore((state) => state.setsubscribe);





    //go next step function is here
    function goNext(e) {

        e.preventDefault();

        if (
            fristName != "" &&
            lastName != "" &&
            companyName != "" &&
            email != "" &&
            officeNumber != "" &&
            mobileNumber != "" &&
            assignmentTitle != "" &&
            assignmentDate != "" &&
            callTime != "" &&
            endTime != "" &&
            vanueName != "" &&
            vanueAddress != "" &&
            numberOfGuest != "" &&
            dressAttire != "" &&
            onsiteContactNumber != "" &&
            specialRequest !== "" &&
            bookFor !== "" &&
            agreeToTerms !== false &&
            subscribe !== false
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
                        <label htmlFor="bookingFirstName">First Name:</label>
                        <input onChange={(e) => { setfristName(e.target.value) }}
                            type="text"
                            name="bookingFirstName"
                            id="bookingFirstName"
                            className='booking-input-field p-3 rounded-md'
                            placeholder='First Name'
                        />

                    </div >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="bookingLastName">Last Name:</label>
                        <input
                            onChange={(e) => { setlastName(e.target.value) }}
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
                            onChange={(e) => { setcompanyName(e.target.value) }}
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
                        <label htmlFor="bokkignOfficeNumber">Office Number:</label>
                        <input
                            onChange={(e) => { setofficeNumber(e.target.value) }}
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
                            onChange={(e) => { setmobileNumber(e.target.value) }}
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
                            onChange={(e) => { setassignmentTitle(e.target.value) }}
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
                            onChange={(e) => { setassignmentDate(e.target.value) }}
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
                            onChange={(e) => { setcallTime(e.target.value) }}
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
                            onChange={(e) => { setendTime(e.target.value) }}
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
                            onChange={(e) => { setvanueName(e.target.value) }}
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
                            onChange={(e) => { setvanueAddress(e.target.value) }}
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
                            onChange={(e) => { setnumberOfGuest(e.target.value) }}
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
                            onChange={(e) => { setdressAttire(e.target.value) }}
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
                            onChange={(e) => { setonsiteContactNumber(e.target.value) }}
                            type="text"
                            name="bookingOnSiteContactName"
                            id="bookingOnSiteContactName"
                            className='booking-input-field p-3 rounded-md'
                            placeholder='On Site Contact Name'
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="bookingPostImage">Post images to <Link className="pcl font-bold" href="https://www.youtube.com/channel/UCcSN0lEmUsz_daQTkMUiMPg">picturetv.net</Link> & service to media (*):</label>
                        <select onChange={(e) => { setpostImagetopictureTv(e.target.value) }} name="bookingPostImage" className='booking-input-field p-3 rounded-md'>
                            <option value={true}>YES</option>
                            <option value={false}>NO</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="bookingRequest">Special Requests/Notes:</label>
                        <textarea
                            onChange={(e) => { setspecialRequest(e.target.value) }}
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
                        <label htmlFor="bokkingAssignmentDate">Book For:</label>
                        <select onChange={(e) => { setbookFor(e.target.value) }} className="booking-input-field p-3 rounded-md" name="" id="">
                            <option value=""> Please Select</option>
                            <option value="Hourly">Hourly</option>
                            <option value="Day">Day</option>
                        </select>

                    </div>

                </form >

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

            </div >








            <div className='w-full flex justify-center items-center'>
                <button onClick={(e) => { goNext(e) }} className='pbg2 py-1 px-3 mt-10 mb-4 md:py-3 md:px-5 rounded-md cursor-pointer text-white text-lg font-semibold text-center'>Next</button>
            </div>

            <ToastContainer />
        </>
    )
}

export default BookingBigForm;
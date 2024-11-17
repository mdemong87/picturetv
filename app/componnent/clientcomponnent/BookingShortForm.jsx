import { useStore } from "@/lib/store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingShortForm = () => {


    const setrander = useStore((state) => state.setrander);

    const fristName = useStore((state) => state.fristName);
    const lastName = useStore((state) => state.lastName);
    const mobileNumber = useStore((state) => state.mobileNumber);
    const email = useStore((state) => state.email);
    const resion = useStore((state) => state.resion);
    const socialMediaProfile = useStore((state) => state.socialMediaProfile);
    const sessionInteresed = useStore((state) => state.sessionInteresed);
    const dsccribeLooking = useStore((state) => state.dsccribeLooking);
    const hearAbout = useStore((state) => state.hearAbout);



    const setfristName = useStore((state) => state.setfristName);
    const setlastName = useStore((state) => state.setlastName);
    const setmobileNumber = useStore((state) => state.setmobileNumber);
    const setemail = useStore((state) => state.setemail);
    const setresion = useStore((state) => state.setresion);
    const setsocialMediaProfile = useStore((state) => state.setsocialMediaProfile);
    const setsessionInteresed = useStore((state) => state.setsessionInteresed);
    const setdsccribeLooking = useStore((state) => state.setdsccribeLooking);
    const sethearAbout = useStore((state) => state.sethearAbout);






    //go next step function is here
    function goNext(e) {

        e.preventDefault();

        if (
            fristName != "" &&
            lastName != "" &&
            resion != "" &&
            email != "" &&
            socialMediaProfile != "" &&
            mobileNumber != "" &&
            sessionInteresed != "" &&
            dsccribeLooking != "" &&
            hearAbout != ""
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
                        <input onChange={(e) => { setlastName(e.target.value) }}
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
                        <label htmlFor="bokkignOfficeNumber">Cell Phone Number:</label>
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
                        <label htmlFor="bokkingMobileNumber">State/Region:</label>
                        <input
                            onChange={(e) => { setresion(e.target.value) }}
                            type="text"
                            name="bokkingMobileNumber"
                            id="bokkingMobileNumber"

                            className='booking-input-field p-3 rounded-md'
                            placeholder='State/Region'
                        />

                    </div>
                    <div className="flex flex-col gap-2">
                        <hr />
                        {/* booking info */}
                        <label htmlFor="bokkingAssignmentTitle">Social Media Profile (Url):</label>
                        <input
                            onChange={(e) => { setsocialMediaProfile(e.target.value) }}
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
                        <label htmlFor="bokkingAssignmentDate">Session Interested In:</label>
                        <select onChange={(e) => { setsessionInteresed(e.target.value) }} className="booking-input-field p-3 rounded-md" name="" id="">
                            <option value=""> Please Select</option>
                            <option value="Individual Headshots">Product</option>
                            <option value="Corporate/Team Headshots">Food</option>
                            <option value="Lifestyle Branding">Automotive</option>
                            <option value="Lifestyle Branding">Aircraft</option>
                            <option value="Lifestyle Branding">Commercial</option>
                            <option value="Lifestyle Branding">Industrial</option>
                            <option value="Lifestyle Branding">Landscape</option>
                            <option value="Lifestyle Branding">Real Estate</option>
                            <option value="Lifestyle Branding">Others</option>
                        </select>

                    </div>



                    <div className="flex flex-col gap-2">
                        <label htmlFor="bookingOnSiteContactName">Could you please describe what you&apos;re looking for?</label>
                        <textarea onChange={(e) => { setdsccribeLooking(e.target.value) }} className="booking-input-field p-3 rounded-md"></textarea>
                    </div>


                    <div className="flex flex-col gap-2">
                        <hr />
                        {/* booking info */}
                        <label htmlFor="bokkingAssignmentDate">How did you hear about All About Headshots*:</label>
                        <select onChange={(e) => { sethearAbout(e.target.value) }} className="booking-input-field p-3 rounded-md" name="" id="">
                            <option value=""> Please Select</option>
                            <option value="Cheif"> Cheif</option>
                            <option value="Linkedin">Linkedin</option>
                            <option value="Google-By-Business">Goggle By Business</option>
                            <option value="Referral.Please let me know so so i can thank them!">Referral.Please let me know so so i can thank them!</option>
                            <option value="Bank">Bank</option>
                            <option value="Wall Street Journal Article">Wall Street Journal Article</option>
                            <option value="Word of Mouth">Word of Mouth</option>
                            <option value="NJAWBO">NJAWBO</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Instragram">Instragram</option>
                            <option value="Morris County Chamber">Morris County Chamber</option>
                            <option value="NJBIA">NJBIA</option>
                            <option value="NJ Chamber">NJ Chamber</option>
                            <option value="Others">Others</option>
                        </select>


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

export default BookingShortForm;
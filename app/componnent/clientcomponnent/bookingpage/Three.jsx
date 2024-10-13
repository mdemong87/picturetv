'use client'

import { useStore } from "@/lib/store";
import Link from "next/link";

const Three = () => {


    const shootType = useStore((state) => state.shootType);



    return (
        <div className='w-full border rounded-md border-gray-300 py-10 px-7'>
            <h3 className='text-2xl text-black text-center font-semibold mb-10'>Event Booking</h3>
            {
                shootType == "Headshot" || shootType == "Fashion" || shootType == "Team & Office" || shootType == "Portrait" ? (
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

                            </div >
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
                                <label htmlFor="bokkignOfficeNumber">Cell Phone Number:</label>
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
                                <label htmlFor="bokkingMobileNumber">State/Region:</label>
                                <input
                                    type="text"
                                    name="bokkingMobileNumber"
                                    id="bokkingMobileNumber"

                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Mobile Number'
                                />

                            </div>
                            <div className="flex flex-col gap-2">
                                <hr />
                                {/* booking info */}
                                <label htmlFor="bokkingAssignmentTitle">Linkedin Profile (Url):</label>
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
                                <label htmlFor="bokkingAssignmentDate">Session Interested In:</label>
                                <select className="booking-input-field p-3 rounded-md" name="" id="">
                                    <option value=""> Please Select</option>
                                    <option value="Individual Headshots">Individual Headshots</option>
                                    <option value="Corporate/Team Headshots">Corporate/Team Headshots</option>
                                    <option value="Lifestyle Branding">Lifestyle Branding</option>
                                </select>

                            </div>



                            <div className="flex flex-col gap-2">
                                <label htmlFor="bookingOnSiteContactName">What is prompting you to look for a headshot now?:</label>
                                <textarea className="booking-input-field p-3 rounded-md"></textarea>
                            </div>


                            <div className="flex flex-col gap-2">
                                <hr />
                                {/* booking info */}
                                <label htmlFor="bokkingAssignmentDate">How did you hear about All About Headshots*:</label>
                                <select className="booking-input-field p-3 rounded-md" name="" id="">
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
                ) : (
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

                            </div >
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
                                <label htmlFor="bookingPostImage">Post images to <Link className="pcl font-bold" href="https://www.youtube.com/channel/UCcSN0lEmUsz_daQTkMUiMPg">picturetv.net</Link> & service to media (*):</label>
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

                        </form >

                        <div className="mt-6">
                            <div className="flex gap-3 items-center">
                                <input className="w-[20px] h-[20px]" type="checkbox" />
                                <span className="text-xl pcl2">
                                    I Agree to the Terms and Conditions
                                </span>
                            </div>
                            <div className="flex gap-3 items-center mt-2">
                                <input className="w-[20px] h-[20px]" type="checkbox" />
                                <span className="text-xl pcl2">Subscribe to our newsletter</span>
                            </div>
                        </div>

                    </div >
                )
            }
        </div >

    )
}

export default Three;
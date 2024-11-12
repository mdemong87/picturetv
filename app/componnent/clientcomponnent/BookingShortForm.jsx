const BookingShortForm = () => {
    return (
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
                    <label htmlFor="bokkingAssignmentTitle">Social Media Profile (Url):</label>
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
    )
}

export default BookingShortForm;
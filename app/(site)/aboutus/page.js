import Container from "@/app/componnent/clientcomponnent/Container";

const AboutUS = () => {
    return (
        <main className="h-fit w-screen pt-28 pb-14">
            <Container>
                <div>
                    <h2 className="text-3xl font-bold text-center pt-8">About Us</h2>
                    <p className="text-gray-600 text-semibold text-xl text-center mt-9">
                        Celebrities, Fashion, Beauty, Commercial photographer & Films Director Mala Seza was born in Port-au-Prince, Haiti and relocated to New York City in 1998. He started photography 12 years ago. His unique style represents different ways he sees life, showing the composition and use of colors which reflects liveliness. He uses a wide range of lighting techniques depending on the project and a variety of different camera formats and photographic methods. He always brings a combination of professionalism, creative problem solving skills and a great attitude to the shoot. Mala has the ability to create large scale productions with modest budgets. He works promptly without complication and takes a great deal of satisfaction in his work. Please feel free to contact Picture TV Media Productions about any upcoming projects you may have. He is always ready for his next challenge
                    </p>
                </div>
                <div>
                    <div className="mt-20">
                        <form className='w-full grid grid-cols-1 gap-5'>
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
                                <label htmlFor="bookingRequest">Discribe Message:</label>
                                <textarea
                                    name="bookingRequest"
                                    id="bookingRequest"
                                    cols="30"
                                    rows="5"
                                    className='booking-input-field p-3 rounded-md'
                                    placeholder='Discribe Message:'
                                >
                                </textarea>
                            </div>


                            <div className="my-4">
                                <div className="flex gap-3 items-center mt-2">
                                    <input className="w-[20px] h-[20px]" type="checkbox" />
                                    <span className="text-xl pcl2">Join Our Newsletter</span>
                                </div>
                            </div>



                            <button className="pbg2 px-10 py-3 w-fit text-center text-xl font-semibold text-white rounded-md">Submit</button>

                        </form>


                    </div>
                </div>
            </Container >
        </main >
    )
}


export default AboutUS;
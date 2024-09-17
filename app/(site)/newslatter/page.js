const { default: Container } = require("@/app/componnent/clientcomponnent/Container")

const Newslatter = () => {




    return (
        <main className="w-screen h-fit pt-32 pb-10">
            <Container>
                <div>
                    <h2 className="text-3xl font-bold text-center pt-8">Subscribe to Our Newsletter</h2>
                    <form className='w-full grid grid-cols-1 gap-5'>


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
                            <label htmlFor="bookingEmail">Company Name:</label>
                            <input
                                type="email"
                                name="bookingEmail"
                                id="bookingEmail"
                                className='booking-input-field p-3 rounded-md'
                                placeholder='Company Name'
                            />

                        </div>

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
                            <label htmlFor="bookingLastName">Conpany Activity:</label>
                            <input
                                type="text"
                                name="bookingLastName"
                                id="bookingLastName"
                                className='booking-input-field p-3 rounded-md'
                                placeholder='Conpany Activity'
                            />

                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="bookingLastName">Country</label>
                            <input
                                type="text"
                                name="bookingLastName"
                                id="bookingLastName"
                                className='booking-input-field p-3 rounded-md'
                                placeholder='Country'
                            />

                        </div>



                        <button className="pbg2 mt-5 px-10 py-3 w-fit text-center text-xl font-semibold text-white rounded-md">Submit</button>

                    </form>
                </div>
            </Container>
        </main>
    )
}


export default Newslatter;
import { useStore } from "@/lib/store";
import BookingCard from "../bookingpage/BookingCard";


const Two = ({ setrander }) => {


    const ispersonal = useStore((state) => state.ispersonal);

    return (
        <div className="border rounded-md border-gray-300 p-4">
            <div className='w-full mx-auto px-5 py-10 rounded-md border border-slate-200 mt-10'>
                <h3 className='text-2xl text-black text-center font-semibold mb-10'>What do you need to shoot?</h3>

                {
                    !ispersonal ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                            <BookingCard setrander={setrander} title="Headshot" />
                            <BookingCard setrander={setrander} title="Event" />
                            <BookingCard setrander={setrander} title="Real Estate" />
                            <BookingCard setrander={setrander} title="Team & Office" />
                            <BookingCard setrander={setrander} title="Product" />
                            <BookingCard setrander={setrander} title="Fashion" />
                            <BookingCard setrander={setrander} title="Food" />
                            <BookingCard setrander={setrander} title="Automotive" />
                            <BookingCard setrander={setrander} title="Aircraft" />
                            <BookingCard setrander={setrander} title="Media" />
                            <BookingCard setrander={setrander} title="Sport" />
                            <BookingCard setrander={setrander} title="Commerecial" />
                            <BookingCard setrander={setrander} title="Industrial" />
                            <BookingCard setrander={setrander} title="Landscape" />
                            <BookingCard setrander={setrander} title="Others" />

                        </div>
                    ) : (

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                            <BookingCard setrander={setrander} title="Portrait" />
                            <BookingCard setrander={setrander} title="Family" />
                            <BookingCard setrander={setrander} title="Graduation" />
                            <BookingCard setrander={setrander} title="Party" />
                            <BookingCard setrander={setrander} title="Wedding" />
                            <BookingCard setrander={setrander} title="Engagement" />
                            <BookingCard setrander={setrander} title="Maternity" />
                            <BookingCard setrander={setrander} title="Real Estate" />
                            <BookingCard setrander={setrander} title="Event" />
                            <BookingCard setrander={setrander} title="Children" />
                            <BookingCard setrander={setrander} title="Sport" />
                            <BookingCard setrander={setrander} title="Pet" />
                            <BookingCard setrander={setrander} title="Anniversary" />
                            <BookingCard setrander={setrander} title="Landscape" />
                            <BookingCard setrander={setrander} title="Others" />

                        </div>
                    )

                }

            </div>
        </div>
    )
}

export default Two;
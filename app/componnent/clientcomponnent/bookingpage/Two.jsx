import { useStore } from "@/lib/store";
import aircraft from "../../../../public/assets/booking/aircraft.jpg";
import anniversiry from "../../../../public/assets/booking/anniversiry.jpg";
import automotive from "../../../../public/assets/booking/automotive.jpg";
import children from "../../../../public/assets/booking/children.jpg";
import commerecial from "../../../../public/assets/booking/commerecial.jpg";
import engagement from "../../../../public/assets/booking/engagement.jpg";
import eventphoto from "../../../../public/assets/booking/event.jpg";
import family from "../../../../public/assets/booking/family.jpg";
import fashion from "../../../../public/assets/booking/fashion.jpg";
import food from "../../../../public/assets/booking/food.jpg";
import graduation from "../../../../public/assets/booking/graduation.jpg";
import headshot from "../../../../public/assets/booking/headshot.jpg";
import industial from "../../../../public/assets/booking/industrial.jpg";
import landscape from "../../../../public/assets/booking/landscap.jpg";
import maternity from "../../../../public/assets/booking/maternity.jpg";
import media from "../../../../public/assets/booking/media.jpg";
import other from "../../../../public/assets/booking/others.jpg";
import party from "../../../../public/assets/booking/party.jpg";
import pet from "../../../../public/assets/booking/pet.jpg";
import portrait from "../../../../public/assets/booking/portrait.jpg";
import product from "../../../../public/assets/booking/product.jpg";
import realEstate from "../../../../public/assets/booking/read-estate.jpg";
import sport from "../../../../public/assets/booking/sport.jpg";
import teamandoffice from "../../../../public/assets/booking/team and office.jpg";
import wedding from "../../../../public/assets/booking/wedding.jpg";
import BookingCard from "../bookingpage/BookingCard";
import BookingCardForUnPrice from "./BookingCardForUnPrice";



const Two = () => {


    const ispersonal = useStore((state) => state.ispersonal);
    const setrander = useStore((state) => state.setrander);

    return (
        <div className="border rounded-md border-gray-300 p-4">
            <div className='w-full mx-auto px-5 py-10 rounded-md border border-slate-200 mt-10'>
                <h3 className='text-2xl text-black text-center font-semibold mb-10'>What do you need to shoot?</h3>

                {
                    !ispersonal ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                            <BookingCard imgSrc={headshot} setrander={setrander} title="Headshot" />
                            <BookingCard imgSrc={eventphoto} setrander={setrander} title="Event" />
                            <BookingCard imgSrc={realEstate} setrander={setrander} title="Real Estate" />
                            <BookingCard imgSrc={teamandoffice} setrander={setrander} title="Team & Office" />
                            <BookingCard imgSrc={product} setrander={setrander} title="Product" />
                            <BookingCard imgSrc={fashion} setrander={setrander} title="Fashion" />
                            <BookingCard imgSrc={food} setrander={setrander} title="Food" />
                            <BookingCard imgSrc={automotive} setrander={setrander} title="Automotive" />
                            <BookingCard imgSrc={aircraft} setrander={setrander} title="Aircraft" />
                            <BookingCard imgSrc={media} setrander={setrander} title="Media" />
                            <BookingCard imgSrc={sport} setrander={setrander} title="Sport" />
                            <BookingCard imgSrc={commerecial} setrander={setrander} title="Commerecial" />
                            <BookingCard imgSrc={industial} setrander={setrander} title="Industrial" />
                            <BookingCard imgSrc={landscape} setrander={setrander} title="Landscape" />
                            <BookingCard imgSrc={other} setrander={setrander} title="Others" />

                        </div>
                    ) : (

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-12">
                            <BookingCardForUnPrice imgSrc={portrait} setrander={setrander} title="Portrait" />
                            <BookingCardForUnPrice imgSrc={family} setrander={setrander} title="Family" />
                            <BookingCardForUnPrice imgSrc={graduation} setrander={setrander} title="Graduation" />
                            <BookingCardForUnPrice imgSrc={party} setrander={setrander} title="Party" />
                            <BookingCardForUnPrice imgSrc={wedding} setrander={setrander} title="Wedding" />
                            <BookingCardForUnPrice imgSrc={engagement} setrander={setrander} title="Engagement" />
                            <BookingCardForUnPrice imgSrc={maternity} setrander={setrander} title="Maternity" />
                            <BookingCardForUnPrice imgSrc={children} setrander={setrander} title="Children" />
                            <BookingCardForUnPrice imgSrc={pet} setrander={setrander} title="Pet" />
                            <BookingCardForUnPrice imgSrc={anniversiry} setrander={setrander} title="Anniversary" />
                            <BookingCardForUnPrice imgSrc={other} setrander={setrander} title="Others" />

                        </div>
                    )

                }

            </div>
        </div>
    )
}

export default Two;
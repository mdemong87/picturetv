import { useStore } from "@/lib/store";

const UnAmmountPricingCard = ({ title, dis }) => {


    const rander = useStore((state) => state.rander);
    const setrander = useStore((state) => state.setrander);




    function handleBook(e) {
        e.preventDefault()


        setrander(rander + 1);
    }


    return (
        <div className="py-12">
            <h2 className="pcl2 text-3xl font-bold text-center py-5">{title}</h2>
            <p className="text-lg text-center">
                {dis}
            </p>


            <div className="flex justify-center items-center">
                <button onClick={(e) => { handleBook(e) }} className="pbg2 mt-12 py-1 px-3 md:py-3 md:px-5 rounded-md cursor-pointer text-white text-lg font-semibold text-center">Booking</button>
            </div>
        </div>
    )
}

export default UnAmmountPricingCard;
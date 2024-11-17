'use client'

import priceingData from "@/data/PriceingData";
import { useStore } from "@/lib/store";
import Image from "next/image";

const BookingCardForUnPrice = ({ title, setrander, imgSrc }) => {


    const setshootType = useStore((state) => state.setshootType);
    const ispersonal = useStore((state) => state.ispersonal);


    const foundedprice = priceingData?.find((item) => {
        return item.forPrice == title && item.isbusiness != ispersonal;
    })



    //handleBook function
    function handleBook() {
        if (title == "Portrait" || title == "Wedding") {
            setrander(3);
            setshootType(title);
        } else {
            setrander(4);
            setshootType(title);
        }
    }



    return (
        <div className="w-full h-[400px] my-1 border border-gray-300">
            <div className="h-[200px] cardimagecomponnentImageWrper">
                <Image className="rounded-t-md h-full object-cover portfolioCardHover " src={imgSrc} width={1000} height={1000} alt="portfolio-card-image" />
            </div>

            <div className="w-full p-4 text-2xl text-left font-bold text-gray-900">
                <h3>{title} Shoot</h3>

                {
                    title == "Portrait" || title == "Wedding" ? (
                        <div>
                            <p className="text-lg font-normal text-gray-600 py-2 line-clamp-1">We Have {foundedprice?.data.length} Package for {title}</p>

                            <p className="text-lg pb-4 font-normal text-gray-600 line-clamp-1">Just go with booking</p>
                        </div>
                    ) : (
                        <div>
                            <p className="text-lg font-normal text-gray-600 py-2">{foundedprice?.data[0].title}</p>

                            <p className="text-lg pb-4 font-normal text-gray-600">{foundedprice?.data[0].dis}</p>
                        </div>
                    )
                }

                <button onClick={() => { handleBook() }} type="button" className="text-white pbg2 hover:scale-105 transition-all duration-300 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">{title == "Others" ? "Request for Book" : "Book Now"}</button>
            </div>

        </div >
    )
}

export default BookingCardForUnPrice;
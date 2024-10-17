'use client'

import { useStore } from "@/lib/store";

const PricingCard = ({ title, price, offer, currentPrice }) => {


    const selectedprice = useStore((state) => state.selectedprice);
    const setselectedprice = useStore((state) => state.setselectedprice);


    return (
        <div onClick={() => setselectedprice(currentPrice)} className={`w-full col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 p-8 md:p-4 border-2 border-gray-200 rounded-lg shadow hover:bg-white transition duration-200 cursor-pointer  ${currentPrice == selectedprice ? "border-2 border-green-700 bg-white" : "bg-gray-50"}`}>
            <h5 className="mb-4 text-xl font-medium text-gray-500">{title}</h5>
            <div className="flex items-baseline text-gray-900">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-3xl font-extrabold tracking-tight">{price}</span>
                {/* <span className="ms-1 text-xl font-normal text-gray-500">/month</span> */}
            </div>
            <ul role="list" className="space-y-5 my-7 h-fit">

                {
                    offer?.map((item, index) => {
                        return (
                            <li key={index} className="flex items-center">
                                <svg className="flex-shrink-0 w-4 h-4 pcl2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 ms-3">{item}</span>
                            </li>
                        )
                    })
                }

            </ul>
            {/* <button type="button" className="text-white pbg2 hover:scale-105 transition-all duration-300 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button> */}
        </div>
    )
}

export default PricingCard;
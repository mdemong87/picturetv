'use client'


import { useStore } from "@/lib/store";
import { useState } from "react";
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { BiSolidSelectMultiple } from "react-icons/bi";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";


const FilterSearch = () => {


    const [opencalender, setopencalender] = useState(false);


    const searchText = useStore((state) => state.searchText);
    const setsearchText = useStore((state) => state.setsearchText);



    //handle date range function here
    function handleSelect(ranges) {
        console.log(ranges);
        // {
        //     selection: {
        //         startDate: [native Date Object],
        //             endDate: [native Date Object],
        //   }
        // }


        setopencalender(false);
    }


    //date range function helper
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }



    //handle search result function here
    function handleSearch(e) {

        console.log(e);
    }



    return (
        <div className="pbg2 w-full h-full rounded-md p-4">
            <div className='bg-white rounded-md'>
                <input
                    type="search"
                    name="imageSearch"
                    id="imageSearch"
                    className='w-full p-3 pl-10 outline-none rounded-md'
                    placeholder='Search by Name,Event,Location or Photographer...'
                    required
                />
                <FaSearch className='text-gray-600 text-xl absolute -translate-y-8 translate-x-3' />
            </div>

            {/* selet option div start from here */}
            <div className='mt-5'>
                <select className='w-full pl-10 bg-white p-3 rounded-md' name="type">
                    <option value="Image">Image</option>
                    <option value="Vedio">Vedio</option>
                    <option value="Event">Event</option>
                </select>
                <BiSolidSelectMultiple className='text-gray-600 text-xl absolute -translate-y-8 translate-x-3' />
            </div>




            {/* calender div start from hrer */}
            <div onClick={(e) => { setopencalender(true) }} className='col-span-12 md:col-span-6 lg:col-span-3 bg-white w-full rounded-md p-3 mt-5'>
                <div className='relative'>
                    <div className='flex gap-2 items-center'>
                        <FaCalendarAlt className='text-gray-600 text-xl' />
                        <span className='text-gray-900'>Date start to end date</span>
                    </div>
                    {
                        opencalender && <DateRangePicker
                            ranges={[selectionRange]}
                            onChange={(e) => { handleSelect(e) }}
                            className='absolute top-10 -left-0 w-full lg:-left-24'
                        />
                    }
                </div>
            </div>

            {/* max price and min price option div start from here */}
            {/* <div>
                <div className="flex justify-between items-center mt-5">
                    <b className="w-fit text-white text-xl font-semibold">Min Price:</b>
                    <input className="w-[70px] border-2 border-gray-900 rounded-sm h-[25px] p-1 text-lg font-bold" type="number" />
                </div>
                <div className="flex justify-between items-center mt-5">
                    <b className="w-fit text-white text-xl font-semibold">Max Price:</b>
                    <input className="w-[70px] border-2 border-gray-900 rounded-sm h-[25px] p-1 text-lg font-bold" type="number" />
                </div>
            </div> */}
            {/* max price and min price option div end from here */}


            <button onClick={(e) => { handleSearch(e) }} className="pbg w-full col-span-12 lg:col-span-2 rounded-md text-white text-lg p-3 mt-5">
                Search
            </button>


        </div>
    )
}

export default FilterSearch;
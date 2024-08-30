'use client'


import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { BiSolidSelectMultiple } from "react-icons/bi";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";
import Container from "../Container";

const SearchWper = () => {

    const router = useRouter();
    const [opencalender, setopencalender] = useState(false);


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

        router.push('/searchresult');
    }




    return (
        <div className="translate-y-[80%] md:translate-y-[70%] lg:translate-y-[50%] z-30 absolute bottom-0 w-full">

            <Container>
                <div className="pbg2 border-gray-100 border-2 shadow-xl p-5 rounded-lg">


                    <div className="grid grid-cols-12 gap-4 items-center">

                        <div className='col-span-12 lg:col-span-5'>
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
                        </div>

                        {/* selet option div start from here */}
                        <div className='col-span-12 md:col-span-6 lg:col-span-2'>
                            <select className='w-full pl-10 bg-white p-3 rounded-md' name="type">
                                <option value="Event">Event</option>
                                <option value="Image">Photo</option>
                                <option value="Vedio">Video</option>

                            </select>
                            <BiSolidSelectMultiple className='text-gray-600 text-xl absolute -translate-y-8 translate-x-3' />
                        </div>


                        {/* calender div start from hrer */}
                        <div onClick={(e) => { setopencalender(true) }} className='col-span-12 md:col-span-6 lg:col-span-3 bg-white w-full rounded-md p-3'>
                            <div className='relative'>
                                <div className='flex gap-2 items-center'>
                                    <FaCalendarAlt className='text-gray-600 text-xl' />
                                    <span className='text-gray-900'>Date start to end date</span>
                                </div>
                                {
                                    opencalender && <DateRangePicker
                                        ranges={[selectionRange]}
                                        onChange={(e) => { handleSelect(e) }}
                                        className='absolute top-10 -left-0 w-[200px] lg:-left-24'
                                    />
                                }
                            </div>
                        </div>


                        <button onClick={(e) => { handleSearch(e) }} className="pbg w-full col-span-12 lg:col-span-2 rounded-md text-white p-3">
                            Search
                        </button>

                    </div>





                </div>
            </Container>

        </div>
    )
}



export default SearchWper;
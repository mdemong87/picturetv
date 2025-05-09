'use client'

import { useStore } from '@/lib/store';
import { useEffect } from 'react';
import { FaBriefcase, FaUser } from 'react-icons/fa';
import Container from '../Container';

const One = () => {

    const ispersonal = useStore((state) => state.ispersonal);
    const setispersonal = useStore((state) => state.setispersonal);
    const setrander = useStore((state) => state.setrander);
    const setfromPage = useStore((state) => state.setfromPage);


    useEffect(() => {

        setfromPage('booking');

    }, [])



    return (
        <div className="border rounded-md border-gray-300 p-4">
            <div className='w-full mx-auto px-5 py-10 rounded-md border border-slate-200 mt-10'>
                <h3 className='text-2xl text-black text-center font-semibold pb-8'>Is your shoot for business or personal?</h3>
                {/* business booking info */}

                <Container>
                    <Container>
                        <Container>
                            <div className='w-full grid grid-cols-1 grid-row-2 lg:grid-cols-2 items-center gap-5 mt-5'>
                                <div>
                                    <button onClick={() => { setispersonal(false) }} className='w-full border border-gray-300 rounded-md'>
                                        <div className={`flex items-center gap-5 border text-[#343a40] border-slate-200 p-5 rounded-md hover:bg-[#7AA140] hover:text-white duration-500 ${!ispersonal && "pbg2 text-white"}`}>
                                            <div>
                                                <FaBriefcase className='text-2xl' />
                                            </div>
                                            <div>
                                                <p className='text-base'>Business</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                {/* personal booking info */}
                                <div>
                                    <button onClick={() => { setispersonal(true) }} className='w-full border border-gray-300 rounded-md'>
                                        <div className={`flex items-center text-[#343a40] gap-5 border border-slate-200 p-5 rounded-md hover:bg-[#7AA140] hover:text-white duration-500 ${ispersonal && "pbg2 text-white"}`}>
                                            <div>
                                                <FaUser className='text-2xl' />
                                            </div>
                                            <div>
                                                <p className='text-base'>Personal</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </Container>
                    </Container>
                </Container>




            </div>
            <div className='w-full flex justify-center items-center'>
                <button onClick={() => { setrander(2) }} className='pbg2 py-1 px-3 mt-10 mb-4 md:py-3 md:px-5 rounded-md cursor-pointer text-white text-lg font-semibold text-center'>Next</button>
            </div>
        </div>
    )
}

export default One;
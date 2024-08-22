import { FaBriefcase, FaUser } from 'react-icons/fa';

const One = () => {
    return (
        <div className="border rounded-md border-gray-300 p-4">
            <div className='w-full mx-auto px-5 py-10 rounded-md border border-slate-200 mt-10'>
                <h3 className='text-2xl text-black text-center font-semibold'>Is your shoot for business or personal?</h3>
                {/* business booking info */}
                <div className='grid grid-cols-1 grid-row-2 lg:grid-cols-2 items-center gap-5 mt-5'>
                    <div>
                        <button className='w-full border border-gray-300 rounded-md'>
                            <div className='flex items-center gap-5 border text-[#343a40] border-slate-200 p-5 rounded-md hover:bg-[#7AA140] hover:text-white duration-500'>
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
                        <button className='w-full border border-gray-300 rounded-md'>
                            <div className='flex items-center text-[#343a40] gap-5 border border-slate-200 p-5 rounded-md hover:bg-[#7AA140] hover:text-white duration-500'>
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
            </div>
        </div>
    )
}

export default One;
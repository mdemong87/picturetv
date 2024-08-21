import { BsThreeDots } from "react-icons/bs";
import { FaBuilding, FaCalendar, FaLink, FaUser, FaUsers, FaVideo } from 'react-icons/fa';
import { FaGlasses } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { IoAirplane, IoFastFood } from "react-icons/io5";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdAutoMode, MdLandscape, MdOutlineSportsVolleyball } from "react-icons/md";





const Two = () => {


    const bookingCategory = [
        {
            icon: <FaUser className='text-2xl text-[#343a40]' />,
            title: 'Portrait',
        },
        {
            icon: <FaCalendar className='text-2xl text-[#343a40]' />,
            title: 'Event',
        },
        {
            icon: <FaBuilding className='text-2xl text-[#343a40]' />,
            title: 'Real Estate',
        },
        {
            icon: <FaUsers className='text-2xl text-[#343a40]' />,
            title: 'Team & Office',
        },
        {
            icon: <GiClothes className='text-2xl text-[#343a40]' />,
            title: 'Product',
        },
        {
            icon: <FaGlasses className='text-2xl text-[#343a40]' />,
            title: 'Fashion',
        },
        {
            icon: <IoFastFood className='text-2xl text-[#343a40]' />,
            title: 'Food',
        },
        {
            icon: <MdAutoMode className='text-2xl text-[#343a40]' />,
            title: 'Automotive',
        },
        {
            icon: <IoAirplane className='text-2xl text-[#343a40]' />,
            title: 'Aircraft',
        },
        {
            icon: <FaVideo className='text-2xl text-[#343a40]' />,
            title: 'Media',
        },
        {
            icon: <MdOutlineSportsVolleyball className='text-2xl text-[#343a40]' />,
            title: 'Sport',
        },
        {
            icon: <FaLink className='text-2xl text-[#343a40]' />,
            title: 'Commercial',
        },
        {
            icon: <LiaIndustrySolid className='text-2xl text-[#343a40]' />,
            title: 'Industrial',
        },
        {
            icon: <MdLandscape className='text-2xl text-[#343a40]' />,
            title: 'Landscape',
        },
        {
            icon: <BsThreeDots className='text-2xl text-[#343a40]' />,
            title: 'Other',
        }
    ]



    return (
        <div className="border rounded-md border-gray-300 p-4">
            <div className='w-full mx-auto px-5 py-10 rounded-md border border-slate-200 mt-10'>
                <h3 className='text-2xl text-black text-center font-semibold mb-10'>What do you need to shoot?</h3>

                <select className='w-full border border-gray-300 pbg3 p-4'>
                    {bookingCategory?.map((category, index) => <option key={index} value={category.title}>{category.title}</option>)}
                </select>
            </div>
        </div>
    )
}

export default Two;
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Vedio({ src }) {
    return (
        <div className="h-fit">
            <div className="w-full h-full pbg2 rounded-lg z-0">
                <video className="w-full rounded-lg h-[500px]" autoPlay={true} controls={true}>
                    <source src={src?.file} type="video/mp4" className="" />
                </video>
            </div>
            <div className="bg-white rounded-lg mt-1 p-3 h-fit flex items-start justify-between gap-5">
                <div className="w-full">
                    <h3 className="text-xl font-bold text-gray-700">{src?.title}</h3>
                    <p className="text-gray-500 pt-4">{src?.dis}</p>
                </div>


                <div className="flex w-fit px-5 items-center gap-3">

                    <Link target="Blank" className="p-3 pbg2 rounded-full" href={'/'}>
                        <FaFacebookF className="text-xl text-white" />
                    </Link>
                    <Link target="Blank" className="p-3 pbg2 rounded-full" href={'/'}>
                        <FaInstagram className="text-xl text-white" />
                    </Link>
                    <Link target="Blank" className="p-3 pbg2 rounded-full" href={'/'}>
                        <FaLinkedinIn className="text-xl text-white" />
                    </Link>
                    <Link target="Blank" className="p-3 pbg2 rounded-full" href={'/'}>
                        <FaTwitter className="text-xl text-white" />
                    </Link>

                </div>
            </div>
        </div>
    )
}
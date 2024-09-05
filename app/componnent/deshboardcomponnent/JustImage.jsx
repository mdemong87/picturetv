'use client'

import Image from "next/image";

const JustImage = ({ singleimage }) => {
    return (
        <Image src={singleimage.secure_url} alt="event-Image" width={1000} height={1000} className="col-span-6 md:col-span-3 lg:col-span-2 object-cover rounded-md h-[400px]" />
    )
}

export default JustImage;
'use client'

import Image from "next/image";
import ShareWrper from "../ShareWrper";


const ActorHeadShortCard = ({ data, index, setshowimageSlide, setcurrentIndex }) => {




    return (

        <div onClick={() => { setshowimageSlide(true), setcurrentIndex(index) }} className="w-full col-span-12 md:col-span-6 lg:col-span-3 relative top-0 left-0">
            <Image className="rounded-md h-[400px] object-cover" src={data} width={1000} height={1000} alt="Actor-headshort" />
            <div className="absolute w-full h-full -translate-y-[100%] actorheadshotTransparantBg flex items-end pb-8 justify-center rounded-md">


                <ShareWrper />

            </div>





        </div>
    )
}

export default ActorHeadShortCard;
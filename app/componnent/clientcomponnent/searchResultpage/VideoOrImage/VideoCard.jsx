'use client'

const VideoCard = ({ setshowimageSlide }) => {
    return (
        <div onClick={() => { setshowimageSlide(true) }} className="w-full h-[200px] col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 rounded-md cursor-pointer ">

            <div className="w-full h-full pbg2 rounded-lg z-0">
                <video className="w-full h-full object-cover rounded-lg h-full" muted autoPlay={true} controls={false}>
                    <source src='https://res.cloudinary.com/dmo0gctub/video/upload/v1724511789/videoplayback_puhptt.mp4' type="video/mp4" />

                </video>
            </div>

        </div>
    )
}

export default VideoCard;
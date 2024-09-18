import ShareWrper from "./ShareWrper"


export default function Vedio({ src, currentvideo, setcurrentvideo }) {
    return (
        <div className="h-fit">
            <div className="w-full h-full pbg2 rounded-lg z-0">
                <video onEnded={() => { setcurrentvideo(currentvideo + 1) }} className="w-full rounded-lg h-[500px]" autoPlay={true} controls={true}>
                    <source src={src?.file} type="video/mp4" className="" />
                </video>
            </div>
            <div className="bg-white rounded-lg mt-1 p-3 h-fit flex items-start justify-between gap-5">
                <div className="w-full">
                    <h3 className="text-xl font-bold text-gray-700">{src?.title}</h3>
                    <p className="text-gray-500 pt-4">{src?.dis}</p>
                </div>

                <ShareWrper />

            </div>
        </div>
    )
}
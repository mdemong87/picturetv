export default function Vedio({ src }) {
    return (
        <div className="h-fit">
            <div className="w-full h-full pbg2 rounded-lg z-0">
                <video className="w-full rounded-lg h-full" autoPlay={true} controls={true}>
                    <source src={src?.file} type="video/mp4" />
                </video>
            </div>
            <div className="bg-white rounded-lg mt-1 p-3 h-[90px]">
                <h3 className="text-xl text-gray-700">{src?.title}</h3>
                <p className="text-gray-500 pt-2">{src?.dis}</p>
            </div>
        </div>
    )
}
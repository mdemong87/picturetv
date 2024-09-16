export default function Vedio({ currentvideo }) {
    return (
        <div className="w-full h-full pbg2 rounded-lg z-0">
            <video className="w-full rounded-lg h-full" autoPlay={true} controls={true}>
                <source src={currentvideo} type="video/mp4" />

            </video>
        </div>
    )
}
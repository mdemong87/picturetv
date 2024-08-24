export default function Vedio() {
    return (
        <div className="w-full h-full pbg2 rounded-lg z-0">
            <video className="w-full rounded-lg h-full" autoPlay={true} controls={true}>
                <source src='https://res.cloudinary.com/dmo0gctub/video/upload/v1724511789/videoplayback_puhptt.mp4' type="video/mp4" />

            </video>
        </div>
    )
}
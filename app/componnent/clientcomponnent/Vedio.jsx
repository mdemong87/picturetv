export default function Vedio() {
    return (
        <div className="w-full h-full pbg2 rounded-lg z-0">
            <video className="w-full rounded-lg h-full" autoPlay={true} muted loop controls={true}>
                <source src='https://res.cloudinary.com/dmo0gctub/video/upload/v1707814856/hero_y4mh2o.mp4' type="video/mp4" />

            </video>
        </div>
    )
}
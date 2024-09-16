export default function Vedio({ src }) {
    return (
        <div className="h-fit">
            <iframe className="w-full h-[500px] rounded-lg" width="560" height="500" src={src?.file} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen={true}></iframe>
        </div>
    )
}

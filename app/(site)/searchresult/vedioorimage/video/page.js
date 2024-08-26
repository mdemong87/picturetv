import Container from "@/app/componnent/clientcomponnent/Container";
import VideoCard from "@/app/componnent/clientcomponnent/searchResultpage/VideoOrImage/VideoCard";


const VideoPage = () => {
    return (
        <main className="h-fit pt-36 pb-14">
            <Container>
                <div className="w-full grid gap-4 grid-cols-12 items-center">
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </div>
            </Container>
        </main>
    )
}


export default VideoPage;
import Container from "@/app/componnent/clientcomponnent/Container";
import ImageCard from "@/app/componnent/clientcomponnent/searchResultpage/VideoOrImage/ImageCard";



const ImagePage = () => {
    return (
        <main className="h-fit pt-36 pb-14">
            <Container>
                <div className="w-full grid gap-3 grid-cols-12 items-center">
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                </div>
            </Container>
        </main>
    )
}


export default ImagePage;
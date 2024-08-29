import SingleBlogCard from "@/app/componnent/clientcomponnent/blog/singleBlogCard";
import Container from "@/app/componnent/clientcomponnent/Container";

const Blogs = () => {
    return (
        <main className="h-fit pt-36 pb-14 blogBgbannar">
            <Container>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 lg:col-span-8 w-full h-fit text-white rounded-md flex flex-col gap-5">
                        <SingleBlogCard />
                        <SingleBlogCard />
                        <SingleBlogCard />
                        <SingleBlogCard />
                        <SingleBlogCard />
                        <SingleBlogCard />
                    </div>
                    <aside className="col-span-4 w-full bg-[#8888887c] text-white rounded-md h-full p-5 hidden lg:block">
                        <h1 className=" text-3xl">Blog side data added here very soon</h1>
                    </aside >
                </div>
            </Container>
        </main>
    )
}

export default Blogs;
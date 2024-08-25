import AsideCard from "@/app/componnent/clientcomponnent/AsideCard";
import Container from "@/app/componnent/clientcomponnent/Container";
import Vedio from "@/app/componnent/clientcomponnent/Vedio";

const Blogs = () => {
    return (
        <main className="h-fit pt-36 pb-14">
            <Container>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-8 w-full">
                        <div className="h-[520px] w-full">
                            <Vedio />
                        </div>
                        <div className="bg-white rounded-lg mt-4 p-3 h-[90px]">

                        </div>
                    </div>
                    <aside className="col-span-12 lg:col-span-4 flex flex-col gap-4 w-full h-full">
                        <AsideCard />
                        <AsideCard />
                        <AsideCard />
                        <AsideCard />
                        <AsideCard />
                        <AsideCard />
                        <AsideCard />
                    </aside>
                </div>
            </Container>
        </main>
    )
}

export default Blogs;
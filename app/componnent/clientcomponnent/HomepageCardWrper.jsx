import Link from "next/link";
import Container from "./Container";
import ImageCard from "./imageCard";

const HomePageCardWrper = ({ data }) => {



    return (
        <div className="pt-[195px] md:pt-[135px] lg:pt-[30px]">
            <Container>
                <h1 className="text-3xl font-bold text-gray-900 pb-8">Expolor Best Photos:</h1>

                <div className="grid grid-cols-12 items-center gap-5">



                    {
                        data?.data?.map((singleCard, index) => {
                            return (
                                <ImageCard key={index} data={singleCard} />

                            )
                        })
                    }

                </div>
                <div className="mt-10 flex justify-center items-center">
                    <Link href={'/searchresult'} className="w-fit pbg text-white py-3 px-5 rounded-md cursor-pointer">View All</Link>
                </div>
            </Container>
        </div>
    )
}

export default HomePageCardWrper;
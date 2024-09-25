import SingleBlogCard from "@/app/componnent/clientcomponnent/blog/singleBlogCard";
import Container from "@/app/componnent/clientcomponnent/Container";
import Link from "next/link";

const SingleBlogsPage = () => {
    return (
        <main className="py-28">
            <Container>
                <div className="grid grid-cols-12 gap-5">

                    <div className="col-span-12 lg:col-span-8 w-full h-fit text-white rounded-md flex flex-col gap-5">
                        <SingleBlogCard title={"Desigual S/S 2014"} dis="
                         Spanish fashion brand Desigual delivered a burst of color yet, managed to show a more subdued side than we&lsquo;ve seen. The show opened with an ode to the 60&lsquo; s as models clad in black and white patterned dresses with matching sun hats strutted their stuff. This was followed by an almost entirely different collection of signature Desigual colored garments. 

                        The printed pant sets for women and the well fitting pant designs for men were a highpoint of the collection. Coats and Jackets from the brand for both sexes will also be a hit this season!" image={["https://res.cloudinary.com/picturetv/image/upload/v1727077908/blog-five-1_tcu8gz.jpg", "https://res.cloudinary.com/picturetv/image/upload/v1727077908/blog-three-1_tvsmxl.jpg"]} />


                        {/* <div className="mt-[10px]">
                            <Link className="text-gray-200 rounded-lg p-2 pbg2 text-xl" href={"/blogs"}>Go Back</Link>
                        </div> */}
                    </div>


                    <aside className="col-span-12 md:col-span-4 w-full bg-white text-white rounded-md h-full p-5">
                        <div className="">
                            <h2 className="text-3xl font-semibold text-gray-800">Related Blogs Post:</h2>
                            <div className="mt-[25px]">






                                <div className="my-[10px] text-gray-600">
                                    <Link className="w-fit h-fit" href="/blogs/3">
                                        <div className="bg-[#e4edd9] rounded-md p-2">
                                            <h3 className="text-xl font-semibold line-clamp-1">
                                                Desigual S/S 2014</h3>
                                            <p className="line-clamp-2 text-gray-500 text-sm">
                                                Spanish fashion brand Desigual delivered a burst of color yet, managed to show a more subdued side than we&lsquo;ve seen. The show opened with an ode to the 60&lsquo;s as models clad in black and white patterned dresses with matching sun hats strutted their stuff. This was followed by an almost entirely different collection of signature Desigual colored garments.

                                                The printed pant sets for women and the well fitting pant designs for men were a highpoint of the collection. Coats and Jackets from the brand for both sexes will also be a hit this season!
                                            </p>
                                            <span className="line-clamp-1 text-gray-500 text-sm">Friday, October 4, 2013</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </aside>


                </div>


            </Container>
        </main>
    )
}

export default SingleBlogsPage;
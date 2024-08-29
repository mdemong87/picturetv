import SingleBlogCard from "@/app/componnent/clientcomponnent/blog/singleBlogCard";
import Container from "@/app/componnent/clientcomponnent/Container";
import Image from "next/image";
import Link from "next/link";
import blogImage from "../../../public/assets/bg-3.jpg";

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
                        <Image className="col-span-6 lg:col-span-2 w-full rounded-md" src={blogImage} alt="blog-image" width={1000} height={1000} />
                        <div className="col-span-6 lg:col-span-4 w-full mt-5">
                            <h2 className="text-xl">Blog Title Here and something</h2>
                            <p className="text-gray-300 pt-3 text-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam ab libero, eius natus ratione neque est deleniti mollitia, asperiores beatae quasi facilis impedit distinctio molestiae voluptatem magni! Sunt ipsum explicabo possimus nisi eum debitis enim officia dolorum ex error accusantium laboriosam, rem et facere, magni praesentium natus odit nobis. Natus, rerum. Aspernatur corrupti, odit ex expedita repellat optio iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos saepe repellat voluptatem necessitatibus vitae nisi doloremque quasi quae dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rerum et! Mollitia provident impedit quidem debitis quod totam, consequatur voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto corporis consectetur dignissimos rerum deserunt nam qui exercitationem eum molestias doloribus, harum blanditiis labore recusandae necessitatibus! Ipsum, nemo? Natus, voluptates fuga.
                            </p>

                            <div className="mt-10">
                                <h3 className="text-lg">Related Blogs:</h3>
                                <ul className="pt-3">
                                    <li className="py-1">
                                        <Link href='/' className='underline'>Lorem ipsum dolor sit.</Link>
                                    </li>
                                    <li className="py-1">
                                        <Link href='/' className='underline'>Lorem ipsum dolor sit.</Link>
                                    </li>
                                    <li className="py-1">
                                        <Link href='/' className='underline'>Lorem ipsum dolor sit.</Link>
                                    </li>
                                    <li className="py-1">
                                        <Link href='/' className='underline'>Lorem ipsum dolor sit.</Link>
                                    </li>
                                    <li className="py-1">
                                        <Link href='/' className='underline'>Lorem ipsum dolor sit.</Link>
                                    </li>
                                    <li className="py-1">
                                        <Link href='/' className='underline'>Lorem ipsum dolor sit.</Link>
                                    </li>
                                    <li className="py-1">
                                        <Link href='/' className='underline'>Lorem ipsum dolor sit.</Link>
                                    </li>
                                    <li className="py-1">
                                        <Link href='/' className='underline'>Lorem ipsum dolor sit.</Link>
                                    </li>
                                    <li className="py-1">
                                        <Link href='/' className='underline'>Lorem ipsum dolor sit.</Link>
                                    </li>
                                    <li className="py-1">
                                        <Link href='/' className='underline'>Lorem ipsum dolor sit.</Link>
                                    </li>
                                    <li className="py-1">
                                        <Link href='/' className='underline'>Lorem ipsum dolor sit.</Link>
                                    </li>
                                    <li className="py-1">
                                        <Link href='/' className='underline'>Lorem ipsum dolor sit.</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </aside >
                </div>
            </Container>
        </main>
    )
}

export default Blogs;
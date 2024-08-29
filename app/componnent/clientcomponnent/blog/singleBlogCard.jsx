import Image from "next/image";
import blogImage from "../../../../public/assets/bg-2.jpg";


const SingleBlogCard = () => {
    return (
        <div className="grid gap-5 grid-cols-6 p-5 rounded-md bg-[#8888887c]">
            <Image className="col-span-6 lg:col-span-2 w-full rounded-md" src={blogImage} alt="blog-image" width={1000} height={1000} />
            <div className="col-span-6 lg:col-span-4 w-full">
                <h2 className="text-xl">Blog Title Here and something</h2>
                <p className="text-gray-300 pt-3 text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquam ab libero, eius natus ratione neque est deleniti mollitia, asperiores beatae quasi facilis impedit distinctio molestiae voluptatem magni! Sunt ipsum explicabo possimus nisi eum debitis enim officia dolorum ex error accusantium laboriosam, rem et facere, magni praesentium natus odit nobis. Natus, rerum. Aspernatur corrupti, odit ex expedita repellat optio iusto.
                </p>

            </div>
        </div>
    )
}

export default SingleBlogCard;
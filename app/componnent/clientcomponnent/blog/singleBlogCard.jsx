import Image from "next/image";
import blogImage from "../../../../public/assets/bg-2.jpg";


const SingleBlogCard = ({ title, dis }) => {
    return (
        <div className="grid gap-5 grid-cols-6 p-5 rounded-md bg-[#8888887c]">
            <div className="col-span-6 lg:col-span-6 w-full">
                <Image className="rounded-md w-full" src={blogImage} alt="blog-image" width={1000} height={1000} />
            </div>
            <div className="col-span-6 lg:col-span-6 w-full">
                <h2 className="text-xl">{title}</h2>
                <p className="text-gray-300 pt-3 text-base">
                    {dis}
                </p>

            </div>
        </div>
    )
}

export default SingleBlogCard;
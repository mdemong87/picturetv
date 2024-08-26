import Container from "@/app/componnent/clientcomponnent/Container";
import Link from "next/link";
import { FaImage, FaVideo } from "react-icons/fa";


const VedioOrImage = () => {
    return (
        <main className="h-fit pt-36 pb-14">
            <Container>
                <div className="flex justify-center items-center w-full h-full">
                    <div className=" flex gap-10 items-center justify-center w-fit p-10 h-fit my-20 border border-gray-300 rounded-md">

                        <Link href={'/searchresult/vedioorimage/video'} className={`flex items-center gap-5 border text-[#343a40] border-gray-300 p-5 rounded-md hover:bg-[#7AA140] hover:text-white duration-500`}>
                            <div>
                                <FaVideo className='text-2xl' />
                            </div>
                            <div>
                                <p className='text-base'>Video</p>
                            </div>
                        </Link>

                        {/* Image button */}

                        <Link href={'/searchresult/vedioorimage/image'} className={`flex items-center text-[#343a40] gap-5 border border-gray-300 p-5 rounded-md hover:bg-[#7AA140] hover:text-white duration-500`}>
                            <div>
                                <FaImage className='text-2xl' />
                            </div>
                            <div>
                                <p className='text-base'>Image</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </Container>
        </main>
    )
}


export default VedioOrImage;
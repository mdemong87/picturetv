import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

const ForwordBtn = ({ link }) => {
    return (
        <Link href={link} className="flex p-3 w-fit bg-gray-300 items-center gap-1 ">
            <span className="text-lg font-semibold">Forword</span>
            <div className="rounded-md">
                <MdArrowForwardIos className="text-gray-900 text-xl" />
            </div>

        </Link>
    )
}

export default ForwordBtn;
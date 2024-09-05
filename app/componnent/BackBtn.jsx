const { default: Link } = require("next/link");
import { MdArrowBackIos } from "react-icons/md";

const BackBtn = ({ link }) => {
    return (
        <Link href={link} className="flex p-3 w-fit bg-gray-300 items-center gap-1 ">
            <div className="rounded-md">
                <MdArrowBackIos className="text-gray-900 text-xl" />
            </div>
            <span className="text-lg font-semibold">Back</span>
        </Link>
    )
}

export default BackBtn;
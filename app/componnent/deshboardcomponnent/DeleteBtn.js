import { MdDelete } from "react-icons/md";


const DeleteBtn = ({ data }) => {



    console.log(data);

    return (
        <button className="bg-red-700 text-white text-lg flex gap-2 items-center p-3 font-bold rounded-md">
            <MdDelete className="text-2xl cursor-pointer text-white" />
            Delete
        </button>
    )
}


export default DeleteBtn;
import { CgDanger } from "react-icons/cg";

const DevNotice = () => {
    return (
        <div style={{ zIndex: "9999" }} className="fixed top-0 left-0 w-screen h-screen bg-white z- flex items-center justify-center text-center text-2xl font-bold text-red-500">
            <div className="bg-red-200 border w-fit m-14 border-2 border-red-400 rounded-md p-6 shadow-md flex flex-col items-center justify-center gap-4">

                <CgDanger className="text-red-500 text-5xl" />
                <h1 className="text-4xl font-bold">Important Notice</h1>
                <p className="text-lg">PictureTV has not paid the developer the oustanding amount of $500 USD for the past 5 months and has ben making excuses for a long time.</p>

                <p className="text-lg"><b>Note:</b>To access this website will be restored upon receipt of this payment.</p>

            </div>
        </div>
    )
}


export default DevNotice
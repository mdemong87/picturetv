import Container from "@/app/componnent/clientcomponnent/Container";
import { FaUsers } from "react-icons/fa6";
import { MdAccountBalance, MdEventAvailable } from "react-icons/md";

const Admin = () => {
    return (
        <main className="pt-28 pb-6">
            <Container>
                <div className="py-5">
                    <div className="grid grid-cols-12 justify-between items-center gap-5 w-full h-fit lg:h-[150px]">
                        <div className="w-full col-span-12 md:col-span-6 lg:col-span-4 p-5 rounded-lg border border-gray-300  flex gap-4 items-center shadow-xl bg-white h-full">
                            <FaUsers className="text-5xl text-gray-500" />
                            <div>
                                <div className="flex flex-col gap-2">
                                    <b className="text-xl">
                                        <span>All User:</span>
                                        <span className="text-gray-500"> 78</span>
                                    </b>
                                    <b className="text-xl">
                                        <span>Photographer:</span>
                                        <span className="text-gray-500"> 50</span>
                                    </b>
                                    <b className="text-xl">
                                        <span>Videographer:</span>
                                        <span className="text-gray-500"> 28</span>
                                    </b>
                                </div>
                            </div>
                        </div>

                        <div className="w-full col-span-12 md:col-span-6 lg:col-span-4 p-5 rounded-lg border border-gray-300  flex gap-4 items-center shadow-xl bg-white h-full">
                            <MdEventAvailable className="text-5xl text-gray-500" />
                            <div className="flex flex-col gap-2">
                                <b className="text-xl">
                                    <span>All Event:</span>
                                    <span className="text-gray-500"> 78</span>
                                </b>
                                <b className="text-xl">
                                    <span>Approved Event:</span>
                                    <span className="text-gray-500"> 50</span>
                                </b>
                                <b className="text-xl">
                                    <span>Disapproved:</span>
                                    <span className="text-gray-500"> 28</span>
                                </b>
                            </div>
                        </div>
                        <div className="w-full col-span-12 md:col-span-6 lg:col-span-4 p-5 rounded-lg border border-gray-300  flex gap-4 items-center shadow-xl bg-white h-full">
                            <MdAccountBalance className="text-5xl text-gray-500" />
                            <div>
                                <b className="text-xl">
                                    <span>Balance:</span>
                                    <span className="text-gray-500"> $ 10008</span>
                                </b>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="text-5xl text-red-500 py-6 text-center">This site is under developing......</h1>
            </Container>
        </main>
    )
}

export default Admin;
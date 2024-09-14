const { default: Container } = require("@/app/componnent/clientcomponnent/Container")
import Link from "next/link";
import { MdOutlineCancel } from "react-icons/md";


const Failed = () => {

    return (
        <main className="pt-28">
            <Container>
                <div className="h-fit py-12 flex justify-center items-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="p-8 bg-red-400 w-fit rounded-full">
                            <MdOutlineCancel className="text-white text-7xl" />
                        </div>
                        <h3 className="font-bold text-gray-700 text-xl">Payment Was Failed</h3>
                        <Link href={'/'} className="underline">Go to Media Page</Link>

                    </div>
                </div>
            </Container>
        </main>
    )
}

export default Failed;
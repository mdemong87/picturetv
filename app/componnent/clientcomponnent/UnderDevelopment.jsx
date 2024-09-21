import Link from "next/link";

const UnderDevelopment = () => {
    return (
        <div className="fixed left-0 top-0 bannartransparentBg w-screen h-screen flex justify-center items-center text-center">
            <div className="bg-white rounded-lg p-20">
                <h2 className="text-2xl font-bold mb-4">This page is Under Construction </h2>
                <Link className="underline" href={'/'}>Go to Home Page</Link>
            </div>
        </div>
    )
}

export default UnderDevelopment;
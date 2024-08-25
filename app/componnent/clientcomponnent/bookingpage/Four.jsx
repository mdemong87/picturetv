import Container from "../Container";

const Four = () => {
    return (
        <div>
            <Container>
                <div className="h-fit w-full">
                    <div>
                        <h2 className="pcl2 text-3xl font-bold text-center py-5">Professional Vedio Business Production Package</h2>
                        <p className="text-lg text-center">
                            These beautiful layered videos can be produced for almost any <b>event or profuction to be promoted.</b> They are individually priced based on length of vedio and how conplex they are. Your final video will be <b>Outoutted on USB Flash Drive or Process for the internet.</b> For Local <b>Restaurants,retailers and business professionals</b> who want to advertise their product or servie in mini commercial on location.
                        </p>
                    </div>
                    <div className="w-full h-fit lg:h-[600px] flex flex-col lg:flex-row gap-5 py-10">
                        <div className="w-full h-full bg-white rounded-lg p-7 shadow-xl border-2 border-green-600 cursor-pointer hover:bg-gray-100 transition">
                            <h4 className="text-center text-gray-600 text-lg font-bold">Basic Web Vedio: Up to One Minute</h4>
                            <div className="my-4">
                                <h1 className="text-3xl font-bold text-center text-gray-900">
                                    $1500
                                </h1>
                            </div>
                            <ul className="pt-3 text-center text-gray-500 font-semibold flex flex-col gap-3">
                                <li>1.5 Hours of Shooting</li>
                                <li>Professional Filmmaker</li>
                                <li>One Round of Editing</li>
                                <li>One Location</li>
                                <li>Youtube/Vimeo</li>
                                <li>Music</li>
                            </ul>
                        </div>
                        <div className="w-full h-full bg-white rounded-lg p-7 shadow-xl border-2 border-green-600 cursor-pointer hover:bg-gray-100 transition">
                            <h4 className="text-center text-gray-600 text-lg font-bold">Promotional Web Vedio: Up to Two Minutes</h4>
                            <div className="my-4">
                                <h1 className="text-3xl font-bold text-center text-gray-900">
                                    $2000
                                </h1>
                            </div>
                            <ul className="pt-3 text-center text-gray-500 font-semibold flex flex-col gap-3">
                                <li>2 Hours of Shooting</li>
                                <li>Professional Filmmaker</li>
                                <li>Editing</li>
                                <li>One Location</li>
                                <li>Youtube/Vimeo</li>
                                <li>Music</li>
                            </ul>
                        </div>
                        <div className="w-full h-full bg-white rounded-lg p-7 shadow-xl border-2 border-green-600 cursor-pointer hover:bg-gray-100 transition">
                            <h4 className="text-center text-gray-600 text-lg font-bold">Corporate Web Video: Up to Two Minutes</h4>
                            <div className="my-4">
                                <h1 className="text-3xl font-bold text-center text-gray-900">
                                    $2500
                                </h1>
                            </div>
                            <ul className="pt-3 text-center text-gray-500 font-semibold flex flex-col gap-3">
                                <li>4 Hours of Shooting</li>
                                <li>Professional Filmmaker</li>
                                <li>Editing</li>
                                <li>Two Location</li>
                                <li>Youtube/Vimeo</li>
                                <li>Music</li>
                                <li>Mic with voice-over speaker</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Four;
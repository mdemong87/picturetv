'use client'


const AsideCard = ({ currentvideo, setcurrentvideo, item, index }) => {
    return (
        <div onClick={() => { setcurrentvideo(index) }} className={`rounded-lg w-full h-fit cursor-pointer grid grid-cols-10 pbg2 ${index == currentvideo && "border border-4 border-gray-900"}`}>
            <div className="col-span-10 w-full relative h-full">
                <iframe className="w-full h-[200px] rounded-lg" width="560" height="500" src={item?.file} frameborder="0" allow=" picture-in-picture;"></iframe>
                <div className="absolute top-0 left-0 bg-transparent w-full h-full">

                </div>
            </div>
        </div>
    )
}

export default AsideCard;
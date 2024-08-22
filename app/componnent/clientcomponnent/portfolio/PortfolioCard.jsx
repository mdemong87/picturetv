import Image from "next/image";
import portfoliocardimage from "../../../../public/assets/bg-3.jpg";

const PortfolioCard = () => {
    return (
        <div className="w-full h-[400px] my-8">
            <div className="w-full pbg2 py-2 text-2xl text-center font-bold rounded-t-md text-gray-200">
                <h3>Wedding Photography</h3>
            </div>


            <div className="rounded-b-md h-full">
                <Image className="rounded-b-md h-full object-cover" src={portfoliocardimage} width={1000} height={1000} alt="portfolio-card-image" />
            </div>
        </div>
    )
}

export default PortfolioCard;
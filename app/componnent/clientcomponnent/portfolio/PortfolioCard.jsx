import Image from "next/image";
import Link from "next/link";

const PortfolioCard = ({ title, link, data, index }) => {


    return (
        <Link href={`/portfolio/${link}`} className="w-full h-[400px] my-8">
            <div className="w-full pbg2 py-2 text-2xl text-center font-bold rounded-t-md text-gray-200">
                <h3>{title}</h3>
            </div>


            <div className="rounded-b-md h-full w-full cardimagecomponnentImageWrper">
                <Image className={`rounded-b-md h-full w-full object-cover portfolioCardHover object-center`} src={data?.file[0]} width={1000} height={1000} alt="portfolio-card-image" />
            </div>
        </Link>
    )
}

export default PortfolioCard;
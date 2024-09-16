import PortfolioCard from "./PortfolioCard";

import portfolioImagedata from "@/data/portfolioData";

const PortfolioCardWrper = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">

            {
                portfolioImagedata?.map((item, index) => {
                    return (
                        <PortfolioCard key={index} title={item?.title} link={item?.category} data={item} index={index} />
                    )
                })
            }
        </div>
    )
}

export default PortfolioCardWrper;
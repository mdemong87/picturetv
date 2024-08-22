import PortfolioCard from "./PortfolioCard";

const PortfolioCardWrper = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
        </div>
    )
}

export default PortfolioCardWrper;
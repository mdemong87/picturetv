import PortfolioCard from "./PortfolioCard";

const PortfolioCardWrper = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <PortfolioCard title="HeadShorts" />
            <PortfolioCard title="Beauty" />
            <PortfolioCard title="Fashion" />
            <PortfolioCard title="Editorial" />
            <PortfolioCard title="Children" />
            <PortfolioCard title="Fitness" />
        </div>
    )
}

export default PortfolioCardWrper;
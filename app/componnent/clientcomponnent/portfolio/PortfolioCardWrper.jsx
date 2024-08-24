import PortfolioCard from "./PortfolioCard";

const PortfolioCardWrper = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <PortfolioCard title="HeadShorts" />
            <PortfolioCard title="Artists" />
            <PortfolioCard title="Fashion" />
            <PortfolioCard title="Fitness" />
            <PortfolioCard title="Glamour" />
        </div>
    )
}

export default PortfolioCardWrper;
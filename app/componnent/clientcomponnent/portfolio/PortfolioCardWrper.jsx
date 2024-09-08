import PortfolioCard from "./PortfolioCard";

const PortfolioCardWrper = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <PortfolioCard title="HeadShorts" link={'headshorts'} />
            <PortfolioCard title="Beauty" link={'beauty'} />
            <PortfolioCard title="Fashion" link={'fashion'} />
            <PortfolioCard title="Editorial" link={'editorial'} />
            <PortfolioCard title="Children" link="children" />
            <PortfolioCard title="Fitness" link="fitness" />
        </div>
    )
}

export default PortfolioCardWrper;
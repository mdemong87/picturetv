import Container from "@/app/componnent/clientcomponnent/Container";
import HomePageCardWrper from "@/app/componnent/clientcomponnent/HomepageCardWrper";
import data from "../../../data/EventData";
import FilterSearch from "../../componnent/clientcomponnent/searchResultpage/FilterSearch";


const SearchResult = () => {
    return (
        <main className="h-fit pt-36 pb-14">
            <Container>
                <div className="grid grid-cols-12 gap-5">
                    <div className={`col-span-12 lg:col-span-3 w-full h-fit lg:stickyheader`}>
                        <FilterSearch />
                    </div>
                    <div className="col-span-12 lg:col-span-9 w-full">
                        <HomePageCardWrper data={data} fromPage="search" />
                    </div>
                </div>
            </Container>
        </main>
    )
}


export default SearchResult;
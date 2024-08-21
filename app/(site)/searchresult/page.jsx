import Container from "@/app/componnent/clientcomponnent/Container";
import SearchPageCardWrper from "@/app/componnent/clientcomponnent/searchResultpage/SearchPageCardWrper";
import FilterSearch from "../../componnent/clientcomponnent/searchResultpage/FilterSearch";



const SearchResult = () => {
    return (
        <div className="h-fit pt-36 pb-14">
            <Container>
                <div className="grid grid-cols-12 gap-5">
                    <div className={`col-span-12 lg:col-span-3 w-full h-fit lg:stickyheader`}>
                        <FilterSearch />
                    </div>
                    <div className="col-span-12 lg:col-span-9 w-full">
                        <SearchPageCardWrper />
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default SearchResult;
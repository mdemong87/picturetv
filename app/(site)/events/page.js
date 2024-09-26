import Container from "@/app/componnent/clientcomponnent/Container";
import EventPageEventCardWrper from "@/app/componnent/clientcomponnent/EventPageEventCardWrper";
import Search from "../../componnent/clientcomponnent/Search/Search";


const Event = () => {







    return (
        <main className="h-fit pt-36 pb-14">
            <div className="relative w-full mb-[120px] mt-[40px]">
                <Search />
            </div>
            <Container>
                <EventPageEventCardWrper />
            </Container>
        </main>
    )
}

export default Event;
import AuthUserUpdater from "@/app/componnent/AuthUserUpdater";
import Container from "@/app/componnent/clientcomponnent/Container";
import Prograssber from "@/app/componnent/clientcomponnent/bookingpage/PrograssBar";
import RanderWrper from "@/app/componnent/clientcomponnent/bookingpage/RanderWrper";




const Bookign = async () => {


    console.log('booking page........................!!!!!!!!!!!!!!!');


    return (
        <main className="h-fit pt-24">
            <AuthUserUpdater />
            <div className="h-full">
                <div className="w-full py-10">
                    <Container>
                        <Prograssber />
                        <RanderWrper />
                    </Container>
                </div>


            </div>
        </main>
    )
}

export default Bookign;


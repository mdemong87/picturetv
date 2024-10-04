import Container from "../Container";
import PricingCard from "../PricingCard";

const Four = () => {
    return (
        <div>
            <Container>
                <div className="h-fit w-full">
                    <div>
                        <h2 className="pcl2 text-3xl font-bold text-center py-5">Professional Vedio Business Production Package</h2>
                        <p className="text-lg text-center">
                            These beautiful layered videos can be produced for almost any <b>event or profuction to be promoted.</b> They are individually priced based on length of vedio and how conplex they are. Your final video will be <b>Outoutted on USB Flash Drive or Process for the internet.</b> For Local <b>Restaurants,retailers and business professionals</b> who want to advertise their product or servie in mini commercial on location.
                        </p>
                    </div>
                    <div className="w-full h-fit lg:h-[630px] flex flex-col lg:flex-row gap-5 py-10">
                        <PricingCard />
                        <PricingCard />
                        <PricingCard />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Four;
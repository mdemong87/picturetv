'use client'

import priceingData from "@/data/PriceingData";
import { useStore } from "@/lib/store";
import Container from "../Container";
import PricingCard from "../PricingCard";
import UnAmmountPricingCard from "../UnAmmountPricingCard";

const Four = () => {


    const shootType = useStore((state) => state.shootType);
    const ispersonal = useStore((state) => state.ispersonal);



    const foundedprice = priceingData?.find((item) => {
        return item.forPrice == shootType;
    })

    console.log(foundedprice);


    return (
        <div>
            <Container>
                <div className="h-fit w-full">

                    {
                        foundedprice?.forPrice == "Commerecial" || foundedprice?.forPrice == "Product" || foundedprice?.forPrice == "Food" || foundedprice?.forPrice == "Automotive" || foundedprice?.forPrice == "Aircraft" || foundedprice?.forPrice == "Media" || foundedprice?.forPrice == "Sport" || foundedprice?.forPrice == "Industrial" || foundedprice?.forPrice == "Landscape" || foundedprice?.forPrice == "Family" || foundedprice?.forPrice == "Graduation" || foundedprice?.forPrice == "Party" || foundedprice?.forPrice == "Engagement" || foundedprice?.forPrice == "Maternity" || foundedprice?.forPrice == "Children" || foundedprice?.forPrice == "Pet" || foundedprice?.forPrice == "Anniversary" || (foundedprice?.forPrice == "Others" && foundedprice?.isbusiness == false) ? (
                            <UnAmmountPricingCard title={foundedprice?.data[0]?.title} dis={foundedprice?.data[0]?.dis} />
                        ) : (

                            <div className="w-full h-fit lg:h-fit grid grid-cols-12 gap-5 py-10">

                                {
                                    foundedprice === undefined ? (
                                        <h1 className="text-3xl text-center w-full py-6 font-bold col-span-12">No Price Found!</h1>
                                    ) : (
                                        foundedprice?.data?.map((item, index) => {
                                            return (
                                                <PricingCard key={index} title={item?.title} price={item?.price} offer={item?.offer} currentPrice={item.id} />
                                            )
                                        })
                                    )
                                }



                            </div>
                        )
                    }

                </div>
            </Container>
        </div>
    )
}

export default Four;
'use client'

const { default: Container } = require("@/app/componnent/clientcomponnent/Container")
import ActorHeadShortCard from "@/app/componnent/clientcomponnent/portfolio/ActorHeadshortCard";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";







const ActorHeadShorts = () => {


    //find the dynamic path name
    const { category } = useParams();


    //local state diclire
    const [data, setdata] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/allportfolio/${category}`);
                const data = await res.json();

                // Set your data to state here if needed
                setdata(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [category]);





    return (
        <main className="h-fit pt-36 pb-14">
            <Container>
                <div className="grid grid-cols-12 gap-5">

                    {
                        data?.data?.map((singleitem, index) => {
                            return (
                                <ActorHeadShortCard key={index} data={singleitem} />
                            )
                        })
                    }


                </div>
            </Container>
        </main>
    )
}

export default ActorHeadShorts;
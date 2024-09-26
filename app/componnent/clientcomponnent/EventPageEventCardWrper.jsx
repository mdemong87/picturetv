'use client'

import ImageCard from "@/app/componnent/clientcomponnent/imageCard";
import SearchLogic from "@/lib/helper/SearchLogic";
import replaceSpaceWithUnderscore from "@/lib/helper/spacetounderscore";
import { useStore } from "@/lib/store";
import data from "../../../data/EventPageEventData";


const EventPageEventCardWrper = () => {



    const searchText = useStore((state) => state.searchText);
    const setsearchText = useStore((state) => state.setsearchText);
    const filterData = SearchLogic(data, searchText);



    return (
        <div>
            <div className={`grid grid-cols-12 items-center gap-5`}>

                {
                    filterData?.map((singleCard, index) => {
                        return (
                            <ImageCard key={index} data={singleCard} link={`/events/${replaceSpaceWithUnderscore(singleCard?.title)}`} />

                        )
                    })
                }

            </div>
        </div>
    )
}

export default EventPageEventCardWrper;
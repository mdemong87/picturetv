import Container from "@/app/componnent/clientcomponnent/Container";
import ImageCard from "@/app/componnent/clientcomponnent/imageCard";
import data from "../../../../data/EventPageEventData";

const Images = () => {


    const filterData = data.filter((item) => {
        return item.type == 'Image';
    });


    return (
        <main className="pt-32 pb-10">
            <Container>
                <div>
                    <div className={`grid grid-cols-12 items-center gap-5`}>

                        {
                            filterData?.map((singleCard, index) => {
                                return (
                                    <ImageCard key={index} data={singleCard} link={`/events/images/${singleCard?.eventid}`} />

                                )
                            })
                        }

                    </div>
                </div>
            </Container>
        </main>
    )
}

export default Images;
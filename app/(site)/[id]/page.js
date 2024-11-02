import SingleMediaPageWrper from "@/app/componnent/clientcomponnent/SingleMediaPageWrper";
import replaceSpaceWithUnderscore from "@/lib/helper/spacetounderscore";
import data from "../../../data/EventData";




const SingleAllEventPage = async ({ params }) => {

    //current selete id
    const id = params?.id;


    //data length find
    const length = data?.length;

    //filter out the current data
    const singledata = data?.filter((items) => {
        return replaceSpaceWithUnderscore(items.fullname) == id;
    })


    //currentEvent Id
    const currentId = Number(singledata[0].eventid);
    const imidietLowarItem = currentId == 1 ? currentId : currentId - 1;
    const imidietUpperItem = currentId == length ? currentId : currentId + 1;

    //for next and prev data finding
    const forNextItem = data?.find((item) => {
        return item.eventid == imidietUpperItem;
    })

    const forPrevItem = data?.find((item) => {
        return item.eventid == imidietLowarItem;
    })


    const nextLink = `/${replaceSpaceWithUnderscore(forNextItem?.fullname)}`;
    const prevLink = `/${replaceSpaceWithUnderscore(forPrevItem?.fullname)}`;


    return (
        <main className="pt-28 pb-6">
            <SingleMediaPageWrper id={id} singledata={singledata} nextLink={nextLink} prevLink={prevLink} />
        </main>
    )
}

export default SingleAllEventPage;
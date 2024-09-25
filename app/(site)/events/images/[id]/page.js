import SingleMediaPageWrper from "@/app/componnent/clientcomponnent/SingleMediaPageWrper";
import gertusersession from "@/lib/helper/getusersesssion";
import data from "../../../../../data/EventPageEventData";




const SingleAllEventPage = async ({ params }) => {

    //current selete id
    const id = params?.id;

    //get sission data
    const session = await gertusersession();



    //filter out the current data
    const singledata = data?.filter((items) => {

        return items.eventid == id;
    })


    const length = data.length;




    return (
        <main className="pt-28 pb-6">
            <SingleMediaPageWrper id={id} session={session} singledata={singledata} length={length} />
        </main>
    )
}

export default SingleAllEventPage;
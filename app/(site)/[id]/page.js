import SingleMediaPageWrper from "@/app/componnent/clientcomponnent/SingleMediaPageWrper";
import gertusersession from "@/lib/helper/getusersesssion";





const SingleAllEventPage = async ({ params }) => {

    //current selete id
    const id = params?.id;

    //get sission data
    const session = await gertusersession();



    return (
        <main className="pt-28 pb-6">
            <SingleMediaPageWrper id={id} session={session} />
        </main>
    )
}

export default SingleAllEventPage;
import Container from "@/app/componnent/clientcomponnent/Container";
import AddEventWper from "@/app/componnent/deshboardcomponnent/addevent/AddEventWrper";
// import gertusersession from "@/lib/helper/getusersesssion";
import { ToastContainer } from "react-toastify";


async function AddEvent() {




    // const session = await gertusersession();


    return (
        <main className="h-fit pb-10">
            <Container>
                <AddEventWper session={""} />
            </Container>
            <ToastContainer />
        </main>
    )
}

export default AddEvent;
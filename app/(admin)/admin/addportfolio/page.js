import AddPortfolioWrper from "@/app/componnent/admin/addevent/AddPortfolioWrper";
import Container from "@/app/componnent/clientcomponnent/Container";
import gertusersession from "@/lib/helper/getusersesssion";
import { ToastContainer } from "react-toastify";


const AddPortfolio = async () => {

    const session = await gertusersession();


    return (
        <main className="pt-28 pb-6">
            <Container>
                <div>
                    <AddPortfolioWrper session={session} />
                </div>
            </Container>
            <ToastContainer />
        </main>
    )
}




export default AddPortfolio;
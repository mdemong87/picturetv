import AddPortfolioWrper from "@/app/componnent/admin/addevent/AddPortfolioWrper";
import Container from "@/app/componnent/clientcomponnent/Container";
import { ToastContainer } from "react-toastify";


const AddPortfolio = async () => {


    return (
        <main className="pt-28 pb-6">
            <Container>
                <div>
                    <AddPortfolioWrper />
                </div>
            </Container>
            <ToastContainer />
        </main>
    )
}




export default AddPortfolio;
import Footer from "@/app/componnent/clientcomponnent/Footer";
import Header from "@/app/componnent/deshboardcomponnent/Header";


const DashBoardLayout = ({ children }) => {

    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )


}

export default DashBoardLayout;
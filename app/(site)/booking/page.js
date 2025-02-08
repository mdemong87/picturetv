import AuthUserUpdater from "@/app/componnent/AuthUserUpdater";
import Container from "@/app/componnent/clientcomponnent/Container";
import Prograssber from "@/app/componnent/clientcomponnent/bookingpage/PrograssBar";
import RanderWrper from "@/app/componnent/clientcomponnent/bookingpage/RanderWrper";
import { auth } from "@/lib/auth";
import ConnectDB from "@/lib/connectionDB";
import getUserByEmail from "@/lib/helper/getUserByEmail";



// Server - side function to fetch user data
async function getUserData() {
    let passUserData = null;

    try {
        // Initialize DB connection
        ConnectDB();

        const session = await auth();
        const sessionEmail = session?.user?.email;

        // Find the user by email
        const user = await getUserByEmail(sessionEmail);

        passUserData = {
            uid: user?.uid,
            email: user?.email,
            fullname: user?.fullname,
            role: user?.role,
            isvarified: user?.isvarified,
            createdAt: user?.createdAt,
        };
    } catch (error) {
        console.error("Error from layout page:", error);
    }


    return passUserData;
}



const Bookign = async () => {


    // Fetch user data server-side
    const passUserData = await getUserData();


    console.log('booking page........................!!!!!!!!!!!!!!!');


    return (
        <main className="h-fit pt-24">
            {/* Pass session data to the component */}
            <AuthUserUpdater session={passUserData} />
            <div className="h-full">
                <div className="w-full py-10">
                    <Container>
                        <Prograssber />
                        <RanderWrper />
                    </Container>
                </div>


            </div>
        </main>
    )
}

export default Bookign;
import { auth } from "../auth";
import getUserByEmail from "./getUserByEmail";

async function gertusersession() {

    try {

        const session = await auth();
        const sessionemail = session?.user?.email;

        //find the user
        const user = await getUserByEmail(sessionemail);


        const passUserData = {
            uid: user?.uid,
            email: user?.email,
            fullname: user?.fullname,
            role: user?.role,
            isvarified: user?.isvarified,
            createdAt: user?.createdAt
        }

        // return the user
        return passUserData;



    } catch (error) {
        console.log("Error from getusersession");
        console.log(error);
    }

}

export default gertusersession;
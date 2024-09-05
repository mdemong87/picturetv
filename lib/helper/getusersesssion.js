import { redirect } from "next/navigation";
import { auth } from "../auth";

async function gertusersession() {
    const session = await auth();

    if (!session?.user) {
        redirect('/auth/login');
    }

    return session;

}

export default gertusersession;
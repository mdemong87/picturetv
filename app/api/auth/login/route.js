import { signIn } from "@/lib/auth";
import getUserByEmail from "@/lib/helper/getUserByEmail";


export const POST = async (req) => {


    //get login data from the frontend
    const { email, password, role } = await req.json();


    try {

        const response = await signIn('credentials', {
            email,
            password,
            role,
            redirect: false,
        });


        //get the current user
        const user = await getUserByEmail(email);

        //response back to the frontend
        return Response.json({
            message: "Login Successfull",
            status: 200,
            data: user,
            success: true
        })


    } catch (err) {
        //response back to the frontend
        return Response.json({
            message: "Check Your Email,Password and Role Again",
            status: 500,
            success: false
        })
    }


}
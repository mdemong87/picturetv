import { signIn } from "@/lib/auth";


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


        //response back to the frontend
        return Response.json({
            message: "Login Successfull",
            status: 200,
            data: response,
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